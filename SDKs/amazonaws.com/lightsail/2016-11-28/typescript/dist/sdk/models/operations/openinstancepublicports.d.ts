import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum OpenInstancePublicPortsXAmzTargetEnum {
    Lightsail20161128OpenInstancePublicPorts = "Lightsail_20161128.OpenInstancePublicPorts"
}
export declare class OpenInstancePublicPortsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: OpenInstancePublicPortsXAmzTargetEnum;
}
export declare class OpenInstancePublicPortsRequest extends SpeakeasyBase {
    headers: OpenInstancePublicPortsHeaders;
    request: shared.OpenInstancePublicPortsRequest;
}
export declare class OpenInstancePublicPortsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    openInstancePublicPortsResult?: shared.OpenInstancePublicPortsResult;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
