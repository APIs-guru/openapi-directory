import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutConfigurationSetSuppressionOptionsPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class PutConfigurationSetSuppressionOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetSuppressionOptionsRequestBody extends SpeakeasyBase {
    suppressedReasons?: shared.SuppressionListReasonEnum[];
}
export declare class PutConfigurationSetSuppressionOptionsRequest extends SpeakeasyBase {
    pathParams: PutConfigurationSetSuppressionOptionsPathParams;
    headers: PutConfigurationSetSuppressionOptionsHeaders;
    request: PutConfigurationSetSuppressionOptionsRequestBody;
}
export declare class PutConfigurationSetSuppressionOptionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putConfigurationSetSuppressionOptionsResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
