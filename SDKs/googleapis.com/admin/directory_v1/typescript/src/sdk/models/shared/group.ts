import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Group
/** 
 * Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-groups).
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminCreated" })
  adminCreated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aliases" })
  aliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=directMembersCount" })
  directMembersCount?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nonEditableAliases" })
  nonEditableAliases?: string[];
}
