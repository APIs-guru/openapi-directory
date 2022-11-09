import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ProvisionOrganizationRequest
/** 
 * Request for ProvisionOrganization.
**/
export class GoogleCloudApigeeV1ProvisionOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsRegion" })
  analyticsRegion?: string;

  @Metadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @Metadata({ data: "json, name=runtimeLocation" })
  runtimeLocation?: string;
}
