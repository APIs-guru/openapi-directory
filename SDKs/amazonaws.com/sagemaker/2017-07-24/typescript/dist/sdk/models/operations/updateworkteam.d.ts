import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateWorkteamXAmzTargetEnum {
    SageMakerUpdateWorkteam = "SageMaker.UpdateWorkteam"
}
export declare class UpdateWorkteamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkteamXAmzTargetEnum;
}
export declare class UpdateWorkteamRequest extends SpeakeasyBase {
    headers: UpdateWorkteamHeaders;
    request: shared.UpdateWorkteamRequest;
}
export declare class UpdateWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
    updateWorkteamResponse?: shared.UpdateWorkteamResponse;
}
