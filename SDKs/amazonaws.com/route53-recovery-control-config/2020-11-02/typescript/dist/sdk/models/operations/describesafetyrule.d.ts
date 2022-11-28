import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSafetyRulePathParams extends SpeakeasyBase {
    safetyRuleArn: string;
}
export declare class DescribeSafetyRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSafetyRuleRequest extends SpeakeasyBase {
    pathParams: DescribeSafetyRulePathParams;
    headers: DescribeSafetyRuleHeaders;
}
export declare class DescribeSafetyRuleResponse extends SpeakeasyBase {
    contentType: string;
    describeSafetyRuleResponse?: shared.DescribeSafetyRuleResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
