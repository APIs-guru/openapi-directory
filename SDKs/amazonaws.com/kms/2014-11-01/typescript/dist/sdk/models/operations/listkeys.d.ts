import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListKeysQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare enum ListKeysXAmzTargetEnum {
    TrentServiceListKeys = "TrentService.ListKeys"
}
export declare class ListKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListKeysXAmzTargetEnum;
}
export declare class ListKeysRequest extends SpeakeasyBase {
    queryParams: ListKeysQueryParams;
    headers: ListKeysHeaders;
    request: shared.ListKeysRequest;
}
export declare class ListKeysResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidMarkerException?: any;
    kmsInternalException?: any;
    listKeysResponse?: shared.ListKeysResponse;
    statusCode: number;
}
