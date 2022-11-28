import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBundlesRequestBody extends SpeakeasyBase {
    clickwrapId?: number;
    code?: string;
    description?: string;
    expiresAt?: Date;
    formFieldSetId?: number;
    inboxId?: number;
    maxUses?: number;
    note?: string;
    password?: string;
    paths: string[];
    previewOnly?: boolean;
    requireRegistration?: boolean;
    requireShareRecipient?: boolean;
    userId?: number;
}
export declare class PostBundlesRequest extends SpeakeasyBase {
    request?: PostBundlesRequestBody;
}
export declare class PostBundlesResponse extends SpeakeasyBase {
    bundleEntity?: shared.BundleEntity;
    contentType: string;
    statusCode: number;
}
