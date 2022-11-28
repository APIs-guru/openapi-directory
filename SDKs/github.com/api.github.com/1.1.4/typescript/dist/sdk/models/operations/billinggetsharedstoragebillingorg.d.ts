import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetSharedStorageBillingOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class BillingGetSharedStorageBillingOrgRequest extends SpeakeasyBase {
    pathParams: BillingGetSharedStorageBillingOrgPathParams;
}
export declare class BillingGetSharedStorageBillingOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    combinedBillingUsage?: shared.CombinedBillingUsage;
}
