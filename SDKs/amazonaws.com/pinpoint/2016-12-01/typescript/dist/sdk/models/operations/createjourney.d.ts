import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateJourneyPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateJourneyHeaders extends SpeakeasyBase {
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
export declare class CreateJourneyRequestBodyWriteJourneyRequest extends SpeakeasyBase {
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
export declare class CreateJourneyRequestBody extends SpeakeasyBase {
    writeJourneyRequest: CreateJourneyRequestBodyWriteJourneyRequest;
}
export declare class CreateJourneyRequest extends SpeakeasyBase {
    pathParams: CreateJourneyPathParams;
    headers: CreateJourneyHeaders;
    request: CreateJourneyRequestBody;
}
export declare class CreateJourneyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createJourneyResponse?: shared.CreateJourneyResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
