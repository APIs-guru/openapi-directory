import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecordingConfigurationRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class GetRecordingConfigurationRequest extends SpeakeasyBase {
    headers: GetRecordingConfigurationHeaders;
    request: GetRecordingConfigurationRequestBody;
}
export declare class GetRecordingConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getRecordingConfigurationResponse?: shared.GetRecordingConfigurationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
