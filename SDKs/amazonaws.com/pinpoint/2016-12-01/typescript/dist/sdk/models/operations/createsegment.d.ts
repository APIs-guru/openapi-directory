import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSegmentPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateSegmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
**/
export declare class CreateSegmentRequestBodyWriteSegmentRequest extends SpeakeasyBase {
    dimensions?: shared.SegmentDimensions;
    name?: string;
    segmentGroups?: shared.SegmentGroupList;
    tags?: Map<string, string>;
}
export declare class CreateSegmentRequestBody extends SpeakeasyBase {
    writeSegmentRequest: CreateSegmentRequestBodyWriteSegmentRequest;
}
export declare class CreateSegmentRequest extends SpeakeasyBase {
    pathParams: CreateSegmentPathParams;
    headers: CreateSegmentHeaders;
    request: CreateSegmentRequestBody;
}
export declare class CreateSegmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createSegmentResponse?: shared.CreateSegmentResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
