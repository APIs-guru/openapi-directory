import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJourneyPathParams extends SpeakeasyBase {
    applicationId: string;
    journeyId: string;
}
export declare class GetJourneyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetJourneyRequest extends SpeakeasyBase {
    pathParams: GetJourneyPathParams;
    headers: GetJourneyHeaders;
}
export declare class GetJourneyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getJourneyResponse?: shared.GetJourneyResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
