import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRuleXAmzTargetEnum {
    AwswafRegional20161128CreateRule = "AWSWAF_Regional_20161128.CreateRule"
}
export declare class CreateRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRuleXAmzTargetEnum;
}
export declare class CreateRuleRequest extends SpeakeasyBase {
    headers: CreateRuleHeaders;
    request: shared.CreateRuleRequest;
}
export declare class CreateRuleResponse extends SpeakeasyBase {
    contentType: string;
    createRuleResponse?: shared.CreateRuleResponse;
    statusCode: number;
    wafBadRequestException?: any;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
