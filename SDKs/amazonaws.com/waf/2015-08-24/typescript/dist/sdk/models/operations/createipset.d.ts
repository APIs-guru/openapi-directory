import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateIpSetXAmzTargetEnum {
    Awswaf20150824CreateIpSet = "AWSWAF_20150824.CreateIPSet"
}
export declare class CreateIpSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateIpSetXAmzTargetEnum;
}
export declare class CreateIpSetRequest extends SpeakeasyBase {
    headers: CreateIpSetHeaders;
    request: shared.CreateIpSetRequest;
}
export declare class CreateIpSetResponse extends SpeakeasyBase {
    contentType: string;
    createIpSetResponse?: shared.CreateIpSetResponse;
    statusCode: number;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
}
