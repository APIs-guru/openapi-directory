import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartStudioSsoConfigurationRepairPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class StartStudioSsoConfigurationRepairHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartStudioSsoConfigurationRepairRequest extends SpeakeasyBase {
    pathParams: StartStudioSsoConfigurationRepairPathParams;
    headers: StartStudioSsoConfigurationRepairHeaders;
}
export declare class StartStudioSsoConfigurationRepairResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    startStudioSsoConfigurationRepairResponse?: shared.StartStudioSsoConfigurationRepairResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
