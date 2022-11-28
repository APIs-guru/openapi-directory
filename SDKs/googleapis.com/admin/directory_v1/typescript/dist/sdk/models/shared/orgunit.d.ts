import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.
**/
export declare class OrgUnit extends SpeakeasyBase {
    blockInheritance?: boolean;
    description?: string;
    etag?: string;
    kind?: string;
    name?: string;
    orgUnitId?: string;
    orgUnitPath?: string;
    parentOrgUnitId?: string;
    parentOrgUnitPath?: string;
}
