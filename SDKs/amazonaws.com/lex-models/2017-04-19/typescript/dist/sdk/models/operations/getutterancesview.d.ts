import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUtterancesViewPathParams extends SpeakeasyBase {
    botname: string;
}
export declare enum GetUtterancesViewStatusTypeEnum {
    Detected = "Detected",
    Missed = "Missed"
}
export declare enum GetUtterancesViewViewEnum {
    Aggregation = "aggregation"
}
export declare class GetUtterancesViewQueryParams extends SpeakeasyBase {
    botVersions: string[];
    statusType: GetUtterancesViewStatusTypeEnum;
    view: GetUtterancesViewViewEnum;
}
export declare class GetUtterancesViewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUtterancesViewRequest extends SpeakeasyBase {
    pathParams: GetUtterancesViewPathParams;
    queryParams: GetUtterancesViewQueryParams;
    headers: GetUtterancesViewHeaders;
}
export declare class GetUtterancesViewResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getUtterancesViewResponse?: shared.GetUtterancesViewResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
