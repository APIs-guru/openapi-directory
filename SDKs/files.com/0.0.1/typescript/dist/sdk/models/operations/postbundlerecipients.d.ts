import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBundleRecipientsRequestBody extends SpeakeasyBase {
    bundleId: number;
    company?: string;
    name?: string;
    note?: string;
    recipient: string;
    shareAfterCreate?: boolean;
    userId?: number;
}
export declare class PostBundleRecipientsRequest extends SpeakeasyBase {
    request?: PostBundleRecipientsRequestBody;
}
export declare class PostBundleRecipientsResponse extends SpeakeasyBase {
    bundleRecipientEntity?: shared.BundleRecipientEntity;
    contentType: string;
    statusCode: number;
}
