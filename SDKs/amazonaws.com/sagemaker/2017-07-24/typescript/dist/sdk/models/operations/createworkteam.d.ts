import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkteamXAmzTargetEnum {
    SageMakerCreateWorkteam = "SageMaker.CreateWorkteam"
}
export declare class CreateWorkteamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkteamXAmzTargetEnum;
}
export declare class CreateWorkteamRequest extends SpeakeasyBase {
    headers: CreateWorkteamHeaders;
    request: shared.CreateWorkteamRequest;
}
export declare class CreateWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    createWorkteamResponse?: shared.CreateWorkteamResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
