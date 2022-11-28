import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetSharedStorageBillingGhePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class BillingGetSharedStorageBillingGheRequest extends SpeakeasyBase {
    pathParams: BillingGetSharedStorageBillingGhePathParams;
}
export declare class BillingGetSharedStorageBillingGheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    combinedBillingUsage?: shared.CombinedBillingUsage;
}
