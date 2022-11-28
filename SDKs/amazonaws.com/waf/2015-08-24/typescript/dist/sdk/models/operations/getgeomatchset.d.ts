import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetGeoMatchSetXAmzTargetEnum {
    Awswaf20150824GetGeoMatchSet = "AWSWAF_20150824.GetGeoMatchSet"
}
export declare class GetGeoMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGeoMatchSetXAmzTargetEnum;
}
export declare class GetGeoMatchSetRequest extends SpeakeasyBase {
    headers: GetGeoMatchSetHeaders;
    request: shared.GetGeoMatchSetRequest;
}
export declare class GetGeoMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    getGeoMatchSetResponse?: shared.GetGeoMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
