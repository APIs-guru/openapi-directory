import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRecordingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
export declare class CreateRecordingConfigurationRequestBodyDestinationConfiguration extends SpeakeasyBase {
    s3?: shared.S3DestinationConfiguration;
}
export declare class CreateRecordingConfigurationRequestBody extends SpeakeasyBase {
    destinationConfiguration: CreateRecordingConfigurationRequestBodyDestinationConfiguration;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateRecordingConfigurationRequest extends SpeakeasyBase {
    headers: CreateRecordingConfigurationHeaders;
    request: CreateRecordingConfigurationRequestBody;
}
export declare class CreateRecordingConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createRecordingConfigurationResponse?: shared.CreateRecordingConfigurationResponse;
    internalServerException?: any;
    pendingVerification?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
