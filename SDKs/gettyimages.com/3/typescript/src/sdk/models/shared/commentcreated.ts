import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommentCreated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
