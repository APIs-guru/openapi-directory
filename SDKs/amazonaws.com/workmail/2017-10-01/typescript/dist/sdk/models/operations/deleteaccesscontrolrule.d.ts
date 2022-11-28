import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAccessControlRuleXAmzTargetEnum {
    WorkMailServiceDeleteAccessControlRule = "WorkMailService.DeleteAccessControlRule"
}
export declare class DeleteAccessControlRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccessControlRuleXAmzTargetEnum;
}
export declare class DeleteAccessControlRuleRequest extends SpeakeasyBase {
    headers: DeleteAccessControlRuleHeaders;
    request: shared.DeleteAccessControlRuleRequest;
}
export declare class DeleteAccessControlRuleResponse extends SpeakeasyBase {
    contentType: string;
    deleteAccessControlRuleResponse?: Map<string, any>;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
