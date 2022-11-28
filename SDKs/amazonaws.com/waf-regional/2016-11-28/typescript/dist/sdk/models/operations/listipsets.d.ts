import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListIpSetsXAmzTargetEnum {
    AwswafRegional20161128ListIpSets = "AWSWAF_Regional_20161128.ListIPSets"
}
export declare class ListIpSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIpSetsXAmzTargetEnum;
}
export declare class ListIpSetsRequest extends SpeakeasyBase {
    headers: ListIpSetsHeaders;
    request: shared.ListIpSetsRequest;
}
export declare class ListIpSetsResponse extends SpeakeasyBase {
    contentType: string;
    listIpSetsResponse?: shared.ListIpSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
