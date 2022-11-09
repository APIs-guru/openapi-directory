import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommentCreated extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
