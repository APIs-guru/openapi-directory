import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceDataSyncOrganizationalUnit
/** 
 * The Organizations organizational unit data source for the sync.
**/
export class ResourceDataSyncOrganizationalUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationalUnitId" })
  organizationalUnitId?: string;
}
