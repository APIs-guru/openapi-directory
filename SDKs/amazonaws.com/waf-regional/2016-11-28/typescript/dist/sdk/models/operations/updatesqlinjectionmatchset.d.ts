import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSqlInjectionMatchSetXAmzTargetEnum {
    AwswafRegional20161128UpdateSqlInjectionMatchSet = "AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet"
}
export declare class UpdateSqlInjectionMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSqlInjectionMatchSetXAmzTargetEnum;
}
export declare class UpdateSqlInjectionMatchSetRequest extends SpeakeasyBase {
    headers: UpdateSqlInjectionMatchSetHeaders;
    request: shared.UpdateSqlInjectionMatchSetRequest;
}
export declare class UpdateSqlInjectionMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateSqlInjectionMatchSetResponse?: shared.UpdateSqlInjectionMatchSetResponse;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
