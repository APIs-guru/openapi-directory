import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutLoggingConfigurationXAmzTargetEnum {
    AwswafRegional20161128PutLoggingConfiguration = "AWSWAF_Regional_20161128.PutLoggingConfiguration"
}
export declare class PutLoggingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLoggingConfigurationXAmzTargetEnum;
}
export declare class PutLoggingConfigurationRequest extends SpeakeasyBase {
    headers: PutLoggingConfigurationHeaders;
    request: shared.PutLoggingConfigurationRequest;
}
export declare class PutLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    putLoggingConfigurationResponse?: shared.PutLoggingConfigurationResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
    wafServiceLinkedRoleErrorException?: any;
    wafStaleDataException?: any;
}
