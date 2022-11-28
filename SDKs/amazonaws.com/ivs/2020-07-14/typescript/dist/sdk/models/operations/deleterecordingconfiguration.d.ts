import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRecordingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRecordingConfigurationRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteRecordingConfigurationRequest extends SpeakeasyBase {
    headers: DeleteRecordingConfigurationHeaders;
    request: DeleteRecordingConfigurationRequestBody;
}
export declare class DeleteRecordingConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
