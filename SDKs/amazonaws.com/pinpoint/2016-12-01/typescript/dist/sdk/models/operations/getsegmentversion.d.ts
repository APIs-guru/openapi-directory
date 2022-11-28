import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSegmentVersionPathParams extends SpeakeasyBase {
    applicationId: string;
    segmentId: string;
    version: string;
}
export declare class GetSegmentVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSegmentVersionRequest extends SpeakeasyBase {
    pathParams: GetSegmentVersionPathParams;
    headers: GetSegmentVersionHeaders;
}
export declare class GetSegmentVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSegmentVersionResponse?: shared.GetSegmentVersionResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
