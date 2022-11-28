import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSafetyRulePathParams extends SpeakeasyBase {
    safetyRuleArn: string;
}
export declare class DeleteSafetyRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSafetyRuleRequest extends SpeakeasyBase {
    pathParams: DeleteSafetyRulePathParams;
    headers: DeleteSafetyRuleHeaders;
}
export declare class DeleteSafetyRuleResponse extends SpeakeasyBase {
    contentType: string;
    deleteSafetyRuleResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
