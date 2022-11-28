import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagKeysQueryParams extends SpeakeasyBase {
    paginationToken?: string;
}
export declare enum GetTagKeysXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetTagKeys = "ResourceGroupsTaggingAPI_20170126.GetTagKeys"
}
export declare class GetTagKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTagKeysXAmzTargetEnum;
}
export declare class GetTagKeysRequest extends SpeakeasyBase {
    queryParams: GetTagKeysQueryParams;
    headers: GetTagKeysHeaders;
    request: shared.GetTagKeysInput;
}
export declare class GetTagKeysResponse extends SpeakeasyBase {
    contentType: string;
    getTagKeysOutput?: shared.GetTagKeysOutput;
    internalServiceException?: any;
    invalidParameterException?: any;
    paginationTokenExpiredException?: any;
    statusCode: number;
    throttledException?: any;
}
