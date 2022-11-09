import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompletionEstimation extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimate" })
  estimate?: Date;
}
