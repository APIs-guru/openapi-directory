import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListGeoMatchSetsXAmzTargetEnum {
    AwswafRegional20161128ListGeoMatchSets = "AWSWAF_Regional_20161128.ListGeoMatchSets"
}
export declare class ListGeoMatchSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGeoMatchSetsXAmzTargetEnum;
}
export declare class ListGeoMatchSetsRequest extends SpeakeasyBase {
    headers: ListGeoMatchSetsHeaders;
    request: shared.ListGeoMatchSetsRequest;
}
export declare class ListGeoMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    listGeoMatchSetsResponse?: shared.ListGeoMatchSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
