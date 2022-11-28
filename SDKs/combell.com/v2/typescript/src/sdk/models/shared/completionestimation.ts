import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompletionEstimation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimate" })
  estimate?: Date;
}
