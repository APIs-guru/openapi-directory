import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetClipOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Payload" })
  payload?: string;
}
