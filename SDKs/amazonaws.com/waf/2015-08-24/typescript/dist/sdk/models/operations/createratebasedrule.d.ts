import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateRateBasedRuleXAmzTargetEnum {
    Awswaf20150824CreateRateBasedRule = "AWSWAF_20150824.CreateRateBasedRule"
}
export declare class CreateRateBasedRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRateBasedRuleXAmzTargetEnum;
}
export declare class CreateRateBasedRuleRequest extends SpeakeasyBase {
    headers: CreateRateBasedRuleHeaders;
    request: shared.CreateRateBasedRuleRequest;
}
export declare class CreateRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    createRateBasedRuleResponse?: shared.CreateRateBasedRuleResponse;
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
