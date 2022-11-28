import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteJourneyPathParams extends SpeakeasyBase {
    applicationId: string;
    journeyId: string;
}
export declare class DeleteJourneyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteJourneyRequest extends SpeakeasyBase {
    pathParams: DeleteJourneyPathParams;
    headers: DeleteJourneyHeaders;
}
export declare class DeleteJourneyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteJourneyResponse?: shared.DeleteJourneyResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
