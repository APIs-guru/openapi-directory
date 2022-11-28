import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
