import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchBundlesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchBundlesIdRequestBody extends SpeakeasyBase {
    clickwrapId?: number;
    code?: string;
    description?: string;
    expiresAt?: Date;
    formFieldSetId?: number;
    inboxId?: number;
    maxUses?: number;
    note?: string;
    password?: string;
    paths?: string[];
    previewOnly?: boolean;
    requireRegistration?: boolean;
    requireShareRecipient?: boolean;
}
export declare class PatchBundlesIdRequest extends SpeakeasyBase {
    pathParams: PatchBundlesIdPathParams;
    request?: PatchBundlesIdRequestBody;
}
export declare class PatchBundlesIdResponse extends SpeakeasyBase {
    bundleEntity?: shared.BundleEntity;
    contentType: string;
    statusCode: number;
}
