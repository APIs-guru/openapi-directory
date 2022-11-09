import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListByteMatchSetsXAmzTargetEnum {
    AwswafRegional20161128ListByteMatchSets = "AWSWAF_Regional_20161128.ListByteMatchSets"
}
export declare class ListByteMatchSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListByteMatchSetsXAmzTargetEnum;
}
export declare class ListByteMatchSetsRequest extends SpeakeasyBase {
    headers: ListByteMatchSetsHeaders;
    request: shared.ListByteMatchSetsRequest;
}
export declare class ListByteMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    listByteMatchSetsResponse?: shared.ListByteMatchSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
