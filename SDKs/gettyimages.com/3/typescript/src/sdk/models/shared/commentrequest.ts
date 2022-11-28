import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
