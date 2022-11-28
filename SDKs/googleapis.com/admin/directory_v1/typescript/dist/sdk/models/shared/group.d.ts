import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-groups).
**/
export declare class Group extends SpeakeasyBase {
    adminCreated?: boolean;
    aliases?: string[];
    description?: string;
    directMembersCount?: string;
    email?: string;
    etag?: string;
    id?: string;
    kind?: string;
    name?: string;
    nonEditableAliases?: string[];
}
