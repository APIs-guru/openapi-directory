import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Group
/** 
 * Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-groups).
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminCreated" })
  adminCreated?: boolean;

  @Metadata({ data: "json, name=aliases" })
  aliases?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=directMembersCount" })
  directMembersCount?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nonEditableAliases" })
  nonEditableAliases?: string[];
}
