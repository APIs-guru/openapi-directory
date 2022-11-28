import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBotPathParams extends SpeakeasyBase {
    botId: string;
}
export declare class DescribeBotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeBotRequest extends SpeakeasyBase {
    pathParams: DescribeBotPathParams;
    headers: DescribeBotHeaders;
}
export declare class DescribeBotResponse extends SpeakeasyBase {
    contentType: string;
    describeBotResponse?: shared.DescribeBotResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
