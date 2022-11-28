import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningQuota } from "./provisioningquota";



// ListProvisioningQuotasResponse
/** 
 * Response for ListProvisioningQuotas.
**/
export class ListProvisioningQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningQuotas", elemType: ProvisioningQuota })
  provisioningQuotas?: ProvisioningQuota[];
}
