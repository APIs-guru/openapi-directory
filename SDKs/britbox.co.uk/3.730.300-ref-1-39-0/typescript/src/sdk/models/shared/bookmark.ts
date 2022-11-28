import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Bookmark extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId: string;
}
