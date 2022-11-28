import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerServicePowersXAmzTargetEnum {
    Lightsail20161128GetContainerServicePowers = "Lightsail_20161128.GetContainerServicePowers"
}
export declare class GetContainerServicePowersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerServicePowersXAmzTargetEnum;
}
export declare class GetContainerServicePowersRequest extends SpeakeasyBase {
    headers: GetContainerServicePowersHeaders;
    request: Map<string, any>;
}
export declare class GetContainerServicePowersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContainerServicePowersResult?: shared.GetContainerServicePowersResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
