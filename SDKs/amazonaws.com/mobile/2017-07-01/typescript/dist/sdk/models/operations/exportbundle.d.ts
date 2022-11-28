import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportBundlePathParams extends SpeakeasyBase {
    bundleId: string;
}
export declare enum ExportBundlePlatformEnum {
    Osx = "OSX",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Objc = "OBJC",
    Swift = "SWIFT",
    Android = "ANDROID",
    Javascript = "JAVASCRIPT"
}
export declare class ExportBundleQueryParams extends SpeakeasyBase {
    platform?: ExportBundlePlatformEnum;
    projectId?: string;
}
export declare class ExportBundleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExportBundleRequest extends SpeakeasyBase {
    pathParams: ExportBundlePathParams;
    queryParams: ExportBundleQueryParams;
    headers: ExportBundleHeaders;
}
export declare class ExportBundleResponse extends SpeakeasyBase {
    badRequestException?: shared.BadRequestException;
    contentType: string;
    exportBundleResult?: shared.ExportBundleResult;
    internalFailureException?: shared.InternalFailureException;
    notFoundException?: shared.NotFoundException;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
