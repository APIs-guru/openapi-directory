import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSqlInjectionMatchSetXAmzTargetEnum {
    AwswafRegional20161128DeleteSqlInjectionMatchSet = "AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet"
}
export declare class DeleteSqlInjectionMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSqlInjectionMatchSetXAmzTargetEnum;
}
export declare class DeleteSqlInjectionMatchSetRequest extends SpeakeasyBase {
    headers: DeleteSqlInjectionMatchSetHeaders;
    request: shared.DeleteSqlInjectionMatchSetRequest;
}
export declare class DeleteSqlInjectionMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    deleteSqlInjectionMatchSetResponse?: shared.DeleteSqlInjectionMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
}
