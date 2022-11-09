import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetLoggingConfigurationXAmzTargetEnum {
    AwswafRegional20161128GetLoggingConfiguration = "AWSWAF_Regional_20161128.GetLoggingConfiguration"
}
export declare class GetLoggingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoggingConfigurationXAmzTargetEnum;
}
export declare class GetLoggingConfigurationRequest extends SpeakeasyBase {
    headers: GetLoggingConfigurationHeaders;
    request: shared.GetLoggingConfigurationRequest;
}
export declare class GetLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getLoggingConfigurationResponse?: shared.GetLoggingConfigurationResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
}
