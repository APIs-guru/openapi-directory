import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateGeoMatchSetXAmzTargetEnum {
    Awswaf20150824CreateGeoMatchSet = "AWSWAF_20150824.CreateGeoMatchSet"
}
export declare class CreateGeoMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGeoMatchSetXAmzTargetEnum;
}
export declare class CreateGeoMatchSetRequest extends SpeakeasyBase {
    headers: CreateGeoMatchSetHeaders;
    request: shared.CreateGeoMatchSetRequest;
}
export declare class CreateGeoMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    createGeoMatchSetResponse?: shared.CreateGeoMatchSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
