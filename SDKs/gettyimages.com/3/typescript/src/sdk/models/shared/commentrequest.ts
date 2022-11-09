import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}
