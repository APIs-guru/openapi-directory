import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBundlePathParams extends SpeakeasyBase {
    bundleId: string;
}
export declare class DescribeBundleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeBundleRequest extends SpeakeasyBase {
    pathParams: DescribeBundlePathParams;
    headers: DescribeBundleHeaders;
}
export declare class DescribeBundleResponse extends SpeakeasyBase {
    badRequestException?: shared.BadRequestException;
    contentType: string;
    describeBundleResult?: shared.DescribeBundleResult;
    internalFailureException?: shared.InternalFailureException;
    notFoundException?: shared.NotFoundException;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
