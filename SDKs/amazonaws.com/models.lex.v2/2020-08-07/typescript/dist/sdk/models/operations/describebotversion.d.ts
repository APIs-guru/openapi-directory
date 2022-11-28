import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBotVersionPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
}
export declare class DescribeBotVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeBotVersionRequest extends SpeakeasyBase {
    pathParams: DescribeBotVersionPathParams;
    headers: DescribeBotVersionHeaders;
}
export declare class DescribeBotVersionResponse extends SpeakeasyBase {
    contentType: string;
    describeBotVersionResponse?: shared.DescribeBotVersionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
