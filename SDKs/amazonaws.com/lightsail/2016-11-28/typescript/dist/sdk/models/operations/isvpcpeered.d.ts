import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum IsVpcPeeredXAmzTargetEnum {
    Lightsail20161128IsVpcPeered = "Lightsail_20161128.IsVpcPeered"
}
export declare class IsVpcPeeredHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IsVpcPeeredXAmzTargetEnum;
}
export declare class IsVpcPeeredRequest extends SpeakeasyBase {
    headers: IsVpcPeeredHeaders;
    request: Map<string, any>;
}
export declare class IsVpcPeeredResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    isVpcPeeredResult?: shared.IsVpcPeeredResult;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
