import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSegmentPathParams extends SpeakeasyBase {
    applicationId: string;
    segmentId: string;
}
export declare class UpdateSegmentHeaders extends SpeakeasyBase {
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
export declare class UpdateSegmentRequestBodyWriteSegmentRequest extends SpeakeasyBase {
    dimensions?: shared.SegmentDimensions;
    name?: string;
    segmentGroups?: shared.SegmentGroupList;
    tags?: Map<string, string>;
}
export declare class UpdateSegmentRequestBody extends SpeakeasyBase {
    writeSegmentRequest: UpdateSegmentRequestBodyWriteSegmentRequest;
}
export declare class UpdateSegmentRequest extends SpeakeasyBase {
    pathParams: UpdateSegmentPathParams;
    headers: UpdateSegmentHeaders;
    request: UpdateSegmentRequestBody;
}
export declare class UpdateSegmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateSegmentResponse?: shared.UpdateSegmentResponse;
}
