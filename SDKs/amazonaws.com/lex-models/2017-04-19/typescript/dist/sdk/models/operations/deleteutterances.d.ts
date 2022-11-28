import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUtterancesPathParams extends SpeakeasyBase {
    botName: string;
    userId: string;
}
export declare class DeleteUtterancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteUtterancesRequest extends SpeakeasyBase {
    pathParams: DeleteUtterancesPathParams;
    headers: DeleteUtterancesHeaders;
}
export declare class DeleteUtterancesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
