import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CloseInstancePublicPortsXAmzTargetEnum {
    Lightsail20161128CloseInstancePublicPorts = "Lightsail_20161128.CloseInstancePublicPorts"
}
export declare class CloseInstancePublicPortsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CloseInstancePublicPortsXAmzTargetEnum;
}
export declare class CloseInstancePublicPortsRequest extends SpeakeasyBase {
    headers: CloseInstancePublicPortsHeaders;
    request: shared.CloseInstancePublicPortsRequest;
}
export declare class CloseInstancePublicPortsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    closeInstancePublicPortsResult?: shared.CloseInstancePublicPortsResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
