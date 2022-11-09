import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { Topic } from "./topic";


export class GetContactListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactListName" })
  contactListName?: string;

  @Metadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Topics", elemType: shared.Topic })
  topics?: Topic[];
}
