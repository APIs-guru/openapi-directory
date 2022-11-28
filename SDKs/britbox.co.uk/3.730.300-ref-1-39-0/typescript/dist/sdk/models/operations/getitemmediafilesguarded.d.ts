import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemMediaFilesGuardedPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetItemMediaFilesGuardedQueryParams extends SpeakeasyBase {
    delivery: shared.MediaFileDeliveryEnum[];
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    formats?: shared.MediaFileFormatsEnum[];
    lang?: string;
    resolution: shared.MediaFileResolutionEnum;
    segments?: string[];
    sub?: string;
}
export declare class GetItemMediaFilesGuardedSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetItemMediaFilesGuardedRequest extends SpeakeasyBase {
    pathParams: GetItemMediaFilesGuardedPathParams;
    queryParams: GetItemMediaFilesGuardedQueryParams;
    security: GetItemMediaFilesGuardedSecurity;
}
export declare class GetItemMediaFilesGuardedResponse extends SpeakeasyBase {
    contentType: string;
    mediaFiles?: shared.MediaFile[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
