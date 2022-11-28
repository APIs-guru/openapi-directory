import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMediaOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Payload" })
  payload?: string;
}
