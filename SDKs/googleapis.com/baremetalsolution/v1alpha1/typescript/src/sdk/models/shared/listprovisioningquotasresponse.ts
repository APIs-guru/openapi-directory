import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisioningQuota } from "./provisioningquota";


// ListProvisioningQuotasResponse
/** 
 * Response for ListProvisioningQuotas.
**/
export class ListProvisioningQuotasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=provisioningQuotas", elemType: shared.ProvisioningQuota })
  provisioningQuotas?: ProvisioningQuota[];
}
