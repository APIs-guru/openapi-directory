import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagValuesQueryParams extends SpeakeasyBase {
    paginationToken?: string;
}
export declare enum GetTagValuesXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetTagValues = "ResourceGroupsTaggingAPI_20170126.GetTagValues"
}
export declare class GetTagValuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTagValuesXAmzTargetEnum;
}
export declare class GetTagValuesRequest extends SpeakeasyBase {
    queryParams: GetTagValuesQueryParams;
    headers: GetTagValuesHeaders;
    request: shared.GetTagValuesInput;
}
export declare class GetTagValuesResponse extends SpeakeasyBase {
    contentType: string;
    getTagValuesOutput?: shared.GetTagValuesOutput;
    internalServiceException?: any;
    invalidParameterException?: any;
    paginationTokenExpiredException?: any;
    statusCode: number;
    throttledException?: any;
}
