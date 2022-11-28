import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkteamXAmzTargetEnum {
    SageMakerDeleteWorkteam = "SageMaker.DeleteWorkteam"
}
export declare class DeleteWorkteamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkteamXAmzTargetEnum;
}
export declare class DeleteWorkteamRequest extends SpeakeasyBase {
    headers: DeleteWorkteamHeaders;
    request: shared.DeleteWorkteamRequest;
}
export declare class DeleteWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    deleteWorkteamResponse?: shared.DeleteWorkteamResponse;
    resourceLimitExceeded?: any;
    statusCode: number;
}
