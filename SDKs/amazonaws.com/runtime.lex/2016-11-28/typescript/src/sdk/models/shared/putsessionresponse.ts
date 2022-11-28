import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioStream" })
  audioStream?: string;
}
