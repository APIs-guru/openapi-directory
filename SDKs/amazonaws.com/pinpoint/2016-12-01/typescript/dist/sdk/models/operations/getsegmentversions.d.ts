import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSegmentVersionsPathParams extends SpeakeasyBase {
    applicationId: string;
    segmentId: string;
}
export declare class GetSegmentVersionsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetSegmentVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSegmentVersionsRequest extends SpeakeasyBase {
    pathParams: GetSegmentVersionsPathParams;
    queryParams: GetSegmentVersionsQueryParams;
    headers: GetSegmentVersionsHeaders;
}
export declare class GetSegmentVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSegmentVersionsResponse?: shared.GetSegmentVersionsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
