import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListRulesXAmzTargetEnum {
    AwswafRegional20161128ListRules = "AWSWAF_Regional_20161128.ListRules"
}
export declare class ListRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRulesXAmzTargetEnum;
}
export declare class ListRulesRequest extends SpeakeasyBase {
    headers: ListRulesHeaders;
    request: shared.ListRulesRequest;
}
export declare class ListRulesResponse extends SpeakeasyBase {
    contentType: string;
    listRulesResponse?: shared.ListRulesResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
