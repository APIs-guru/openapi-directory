import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningQuota } from "./provisioningquota";



// ListProvisioningQuotasResponse
/** 
 * Response message for the list of provisioning quotas.
**/
export class ListProvisioningQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningQuotas", elemType: ProvisioningQuota })
  provisioningQuotas?: ProvisioningQuota[];
}
