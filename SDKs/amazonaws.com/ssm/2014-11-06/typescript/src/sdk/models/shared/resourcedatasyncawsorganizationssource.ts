import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncOrganizationalUnit } from "./resourcedatasyncorganizationalunit";



// ResourceDataSyncAwsOrganizationsSource
/** 
 * Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions.
**/
export class ResourceDataSyncAwsOrganizationsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationSourceType" })
  organizationSourceType: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnits", elemType: ResourceDataSyncOrganizationalUnit })
  organizationalUnits?: ResourceDataSyncOrganizationalUnit[];
}
