import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningQuota } from "./provisioningquota";
/**
 * Response message for the list of provisioning quotas.
**/
export declare class ListProvisioningQuotasResponse extends SpeakeasyBase {
    nextPageToken?: string;
    provisioningQuotas?: ProvisioningQuota[];
}
