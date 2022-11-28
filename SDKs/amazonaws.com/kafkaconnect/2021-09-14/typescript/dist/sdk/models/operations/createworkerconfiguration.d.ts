import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorkerConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkerConfigurationRequestBody extends SpeakeasyBase {
    description?: string;
    name: string;
    propertiesFileContent: string;
}
export declare class CreateWorkerConfigurationRequest extends SpeakeasyBase {
    headers: CreateWorkerConfigurationHeaders;
    request: CreateWorkerConfigurationRequestBody;
}
export declare class CreateWorkerConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createWorkerConfigurationResponse?: shared.CreateWorkerConfigurationResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
