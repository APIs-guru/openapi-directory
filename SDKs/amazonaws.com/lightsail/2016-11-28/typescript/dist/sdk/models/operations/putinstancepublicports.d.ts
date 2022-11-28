import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutInstancePublicPortsXAmzTargetEnum {
    Lightsail20161128PutInstancePublicPorts = "Lightsail_20161128.PutInstancePublicPorts"
}
export declare class PutInstancePublicPortsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInstancePublicPortsXAmzTargetEnum;
}
export declare class PutInstancePublicPortsRequest extends SpeakeasyBase {
    headers: PutInstancePublicPortsHeaders;
    request: shared.PutInstancePublicPortsRequest;
}
export declare class PutInstancePublicPortsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    putInstancePublicPortsResult?: shared.PutInstancePublicPortsResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
