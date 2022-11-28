import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParametersByPathQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetParametersByPathXAmzTargetEnum {
    AmazonSsmGetParametersByPath = "AmazonSSM.GetParametersByPath"
}
export declare class GetParametersByPathHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParametersByPathXAmzTargetEnum;
}
export declare class GetParametersByPathRequest extends SpeakeasyBase {
    queryParams: GetParametersByPathQueryParams;
    headers: GetParametersByPathHeaders;
    request: shared.GetParametersByPathRequest;
}
export declare class GetParametersByPathResponse extends SpeakeasyBase {
    contentType: string;
    getParametersByPathResult?: shared.GetParametersByPathResult;
    internalServerError?: any;
    invalidFilterKey?: any;
    invalidFilterOption?: any;
    invalidFilterValue?: any;
    invalidKeyId?: any;
    invalidNextToken?: any;
    statusCode: number;
}
