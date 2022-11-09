import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateByteMatchSetXAmzTargetEnum {
    AwswafRegional20161128CreateByteMatchSet = "AWSWAF_Regional_20161128.CreateByteMatchSet"
}
export declare class CreateByteMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateByteMatchSetXAmzTargetEnum;
}
export declare class CreateByteMatchSetRequest extends SpeakeasyBase {
    headers: CreateByteMatchSetHeaders;
    request: shared.CreateByteMatchSetRequest;
}
export declare class CreateByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    createByteMatchSetResponse?: shared.CreateByteMatchSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
