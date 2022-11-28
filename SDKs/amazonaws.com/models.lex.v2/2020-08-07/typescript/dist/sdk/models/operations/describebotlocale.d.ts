import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBotLocalePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class DescribeBotLocaleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeBotLocaleRequest extends SpeakeasyBase {
    pathParams: DescribeBotLocalePathParams;
    headers: DescribeBotLocaleHeaders;
}
export declare class DescribeBotLocaleResponse extends SpeakeasyBase {
    contentType: string;
    describeBotLocaleResponse?: shared.DescribeBotLocaleResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
