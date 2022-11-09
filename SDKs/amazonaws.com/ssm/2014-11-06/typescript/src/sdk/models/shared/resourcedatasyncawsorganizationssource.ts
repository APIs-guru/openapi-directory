import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceDataSyncOrganizationalUnit } from "./resourcedatasyncorganizationalunit";


// ResourceDataSyncAwsOrganizationsSource
/** 
 * Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions.
**/
export class ResourceDataSyncAwsOrganizationsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationSourceType" })
  organizationSourceType: string;

  @Metadata({ data: "json, name=OrganizationalUnits", elemType: shared.ResourceDataSyncOrganizationalUnit })
  organizationalUnits?: ResourceDataSyncOrganizationalUnit[];
}
