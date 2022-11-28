import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateJourneyPathParams extends SpeakeasyBase {
    applicationId: string;
    journeyId: string;
}
export declare class UpdateJourneyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the configuration and other settings for a journey.
**/
export declare class UpdateJourneyRequestBodyWriteJourneyRequest extends SpeakeasyBase {
    activities?: Map<string, shared.Activity>;
    creationDate?: string;
    lastModifiedDate?: string;
    limits?: shared.JourneyLimits;
    localTime?: boolean;
    name?: string;
    quietTime?: shared.QuietTime;
    refreshFrequency?: string;
    refreshOnSegmentUpdate?: boolean;
    schedule?: shared.JourneySchedule;
    startActivity?: string;
    startCondition?: shared.StartCondition;
    state?: shared.StateEnum;
    waitForQuietTime?: boolean;
}
export declare class UpdateJourneyRequestBody extends SpeakeasyBase {
    writeJourneyRequest: UpdateJourneyRequestBodyWriteJourneyRequest;
}
export declare class UpdateJourneyRequest extends SpeakeasyBase {
    pathParams: UpdateJourneyPathParams;
    headers: UpdateJourneyHeaders;
    request: UpdateJourneyRequestBody;
}
export declare class UpdateJourneyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateJourneyResponse?: shared.UpdateJourneyResponse;
}
