import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1OrganizationProjectMapping } from "./googlecloudapigeev1organizationprojectmapping";


export class GoogleCloudApigeeV1ListOrganizationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=organizations", elemType: shared.GoogleCloudApigeeV1OrganizationProjectMapping })
  organizations?: GoogleCloudApigeeV1OrganizationProjectMapping[];
}
