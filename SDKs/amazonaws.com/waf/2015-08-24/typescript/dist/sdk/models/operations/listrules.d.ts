import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRulesXAmzTargetEnum {
    Awswaf20150824ListRules = "AWSWAF_20150824.ListRules"
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
