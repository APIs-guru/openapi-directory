import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioStream" })
  audioStream?: string;
}
