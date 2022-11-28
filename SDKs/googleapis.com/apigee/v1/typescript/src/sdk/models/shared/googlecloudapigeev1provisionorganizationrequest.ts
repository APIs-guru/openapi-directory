import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1ProvisionOrganizationRequest
/** 
 * Request for ProvisionOrganization.
**/
export class GoogleCloudApigeeV1ProvisionOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsRegion" })
  analyticsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeLocation" })
  runtimeLocation?: string;
}
