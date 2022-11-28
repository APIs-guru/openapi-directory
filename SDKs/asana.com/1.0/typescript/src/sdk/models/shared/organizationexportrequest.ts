import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrganizationExportRequest
/** 
 * An *organization_export* request starts a job to export the complete data of the given Organization.
**/
export class OrganizationExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;
}
