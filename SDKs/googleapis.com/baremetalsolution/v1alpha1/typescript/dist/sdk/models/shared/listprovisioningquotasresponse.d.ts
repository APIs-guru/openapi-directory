import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningQuota } from "./provisioningquota";
/**
 * Response for ListProvisioningQuotas.
**/
export declare class ListProvisioningQuotasResponse extends SpeakeasyBase {
    nextPageToken?: string;
    provisioningQuotas?: ProvisioningQuota[];
}
