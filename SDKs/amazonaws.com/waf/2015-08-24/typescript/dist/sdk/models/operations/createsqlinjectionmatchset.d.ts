import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSqlInjectionMatchSetXAmzTargetEnum {
    Awswaf20150824CreateSqlInjectionMatchSet = "AWSWAF_20150824.CreateSqlInjectionMatchSet"
}
export declare class CreateSqlInjectionMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSqlInjectionMatchSetXAmzTargetEnum;
}
export declare class CreateSqlInjectionMatchSetRequest extends SpeakeasyBase {
    headers: CreateSqlInjectionMatchSetHeaders;
    request: shared.CreateSqlInjectionMatchSetRequest;
}
export declare class CreateSqlInjectionMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    createSqlInjectionMatchSetResponse?: shared.CreateSqlInjectionMatchSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
