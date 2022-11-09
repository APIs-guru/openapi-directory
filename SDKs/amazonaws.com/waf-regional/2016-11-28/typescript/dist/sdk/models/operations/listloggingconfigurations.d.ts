import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListLoggingConfigurationsXAmzTargetEnum {
    AwswafRegional20161128ListLoggingConfigurations = "AWSWAF_Regional_20161128.ListLoggingConfigurations"
}
export declare class ListLoggingConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLoggingConfigurationsXAmzTargetEnum;
}
export declare class ListLoggingConfigurationsRequest extends SpeakeasyBase {
    headers: ListLoggingConfigurationsHeaders;
    request: shared.ListLoggingConfigurationsRequest;
}
export declare class ListLoggingConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    listLoggingConfigurationsResponse?: shared.ListLoggingConfigurationsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
}
