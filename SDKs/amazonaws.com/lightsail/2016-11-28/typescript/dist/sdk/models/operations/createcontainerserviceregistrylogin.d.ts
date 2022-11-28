import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateContainerServiceRegistryLoginXAmzTargetEnum {
    Lightsail20161128CreateContainerServiceRegistryLogin = "Lightsail_20161128.CreateContainerServiceRegistryLogin"
}
export declare class CreateContainerServiceRegistryLoginHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerServiceRegistryLoginXAmzTargetEnum;
}
export declare class CreateContainerServiceRegistryLoginRequest extends SpeakeasyBase {
    headers: CreateContainerServiceRegistryLoginHeaders;
    request: Map<string, any>;
}
export declare class CreateContainerServiceRegistryLoginResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createContainerServiceRegistryLoginResult?: shared.CreateContainerServiceRegistryLoginResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
