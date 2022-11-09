import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutAccessControlRuleXAmzTargetEnum {
    WorkMailServicePutAccessControlRule = "WorkMailService.PutAccessControlRule"
}
export declare class PutAccessControlRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAccessControlRuleXAmzTargetEnum;
}
export declare class PutAccessControlRuleRequest extends SpeakeasyBase {
    headers: PutAccessControlRuleHeaders;
    request: shared.PutAccessControlRuleRequest;
}
export declare class PutAccessControlRuleResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    putAccessControlRuleResponse?: Map<string, any>;
    statusCode: number;
}
