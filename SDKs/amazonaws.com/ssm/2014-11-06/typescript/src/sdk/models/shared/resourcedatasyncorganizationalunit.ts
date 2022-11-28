import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceDataSyncOrganizationalUnit
/** 
 * The Organizations organizational unit data source for the sync.
**/
export class ResourceDataSyncOrganizationalUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitId" })
  organizationalUnitId?: string;
}
