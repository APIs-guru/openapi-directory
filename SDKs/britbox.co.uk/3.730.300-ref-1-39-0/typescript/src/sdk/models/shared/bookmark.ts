import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Bookmark extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=itemId" })
  itemId: string;
}
