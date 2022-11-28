import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemMediaFilesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetItemMediaFilesQueryParams extends SpeakeasyBase {
    delivery: shared.MediaFileDeliveryEnum[];
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    formats?: shared.MediaFileFormatsEnum[];
    lang?: string;
    resolution: shared.MediaFileResolutionEnum;
    segments?: string[];
    sub?: string;
}
export declare class GetItemMediaFilesSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetItemMediaFilesRequest extends SpeakeasyBase {
    pathParams: GetItemMediaFilesPathParams;
    queryParams: GetItemMediaFilesQueryParams;
    security: GetItemMediaFilesSecurity;
}
export declare class GetItemMediaFilesResponse extends SpeakeasyBase {
    contentType: string;
    mediaFiles?: shared.MediaFile[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
