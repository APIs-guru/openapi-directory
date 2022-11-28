import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1OrganizationProjectMapping } from "./googlecloudapigeev1organizationprojectmapping";



export class GoogleCloudApigeeV1ListOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: GoogleCloudApigeeV1OrganizationProjectMapping })
  organizations?: GoogleCloudApigeeV1OrganizationProjectMapping[];
}
