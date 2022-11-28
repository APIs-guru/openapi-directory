import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBotAliasPathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
}
export declare class DescribeBotAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeBotAliasRequest extends SpeakeasyBase {
    pathParams: DescribeBotAliasPathParams;
    headers: DescribeBotAliasHeaders;
}
export declare class DescribeBotAliasResponse extends SpeakeasyBase {
    contentType: string;
    describeBotAliasResponse?: shared.DescribeBotAliasResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
