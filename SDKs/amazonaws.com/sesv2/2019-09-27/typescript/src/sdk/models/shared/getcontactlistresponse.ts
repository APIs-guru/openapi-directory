import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { Topic } from "./topic";



export class GetContactListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactListName" })
  contactListName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Topics", elemType: Topic })
  topics?: Topic[];
}
