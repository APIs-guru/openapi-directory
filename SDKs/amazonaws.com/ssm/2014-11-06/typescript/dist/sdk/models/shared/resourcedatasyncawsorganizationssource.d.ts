import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncOrganizationalUnit } from "./resourcedatasyncorganizationalunit";
/**
 * Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions.
**/
export declare class ResourceDataSyncAwsOrganizationsSource extends SpeakeasyBase {
    organizationSourceType: string;
    organizationalUnits?: ResourceDataSyncOrganizationalUnit[];
}
