import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response object containing the sellers status with regards to the specified payment program.
**/
export declare class PaymentsProgramResponse extends SpeakeasyBase {
    marketplaceId?: string;
    paymentsProgramType?: string;
    status?: string;
    wasPreviouslyOptedIn?: boolean;
}
