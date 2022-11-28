import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingGetSharedStorageBillingUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class BillingGetSharedStorageBillingUserRequest extends SpeakeasyBase {
    pathParams: BillingGetSharedStorageBillingUserPathParams;
}
export declare class BillingGetSharedStorageBillingUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    combinedBillingUsage?: shared.CombinedBillingUsage;
}
