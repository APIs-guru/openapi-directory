import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateJourneyStatePathParams extends SpeakeasyBase {
    applicationId: string;
    journeyId: string;
}
export declare class UpdateJourneyStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Changes the status of a journey.
**/
export declare class UpdateJourneyStateRequestBodyJourneyStateRequest extends SpeakeasyBase {
    state?: shared.StateEnum;
}
export declare class UpdateJourneyStateRequestBody extends SpeakeasyBase {
    journeyStateRequest: UpdateJourneyStateRequestBodyJourneyStateRequest;
}
export declare class UpdateJourneyStateRequest extends SpeakeasyBase {
    pathParams: UpdateJourneyStatePathParams;
    headers: UpdateJourneyStateHeaders;
    request: UpdateJourneyStateRequestBody;
}
export declare class UpdateJourneyStateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateJourneyStateResponse?: shared.UpdateJourneyStateResponse;
}
