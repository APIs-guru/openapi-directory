import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListWebAcLsXAmzTargetEnum {
    Awswaf20150824ListWebAcLs = "AWSWAF_20150824.ListWebACLs"
}
export declare class ListWebAcLsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWebAcLsXAmzTargetEnum;
}
export declare class ListWebAcLsRequest extends SpeakeasyBase {
    headers: ListWebAcLsHeaders;
    request: shared.ListWebAcLsRequest;
}
export declare class ListWebAcLsResponse extends SpeakeasyBase {
    contentType: string;
    listWebAcLsResponse?: shared.ListWebAcLsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
