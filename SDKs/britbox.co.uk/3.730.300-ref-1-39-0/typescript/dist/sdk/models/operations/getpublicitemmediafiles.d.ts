import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicItemMediaFilesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicItemMediaFilesQueryParams extends SpeakeasyBase {
    delivery: shared.MediaFileDeliveryEnum[];
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    formats?: shared.MediaFileFormatsEnum[];
    lang?: string;
    resolution: shared.MediaFileResolutionEnum;
    segments?: string[];
    sub?: string;
}
export declare class GetPublicItemMediaFilesRequest extends SpeakeasyBase {
    pathParams: GetPublicItemMediaFilesPathParams;
    queryParams: GetPublicItemMediaFilesQueryParams;
}
export declare class GetPublicItemMediaFilesResponse extends SpeakeasyBase {
    contentType: string;
    mediaFiles?: shared.MediaFile[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
