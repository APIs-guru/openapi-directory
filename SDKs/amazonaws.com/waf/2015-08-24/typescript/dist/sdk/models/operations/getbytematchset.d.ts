import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetByteMatchSetXAmzTargetEnum {
    Awswaf20150824GetByteMatchSet = "AWSWAF_20150824.GetByteMatchSet"
}
export declare class GetByteMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetByteMatchSetXAmzTargetEnum;
}
export declare class GetByteMatchSetRequest extends SpeakeasyBase {
    headers: GetByteMatchSetHeaders;
    request: shared.GetByteMatchSetRequest;
}
export declare class GetByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    getByteMatchSetResponse?: shared.GetByteMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
