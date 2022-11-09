import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
