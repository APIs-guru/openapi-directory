import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteArtifactXAmzTargetEnum {
    SageMakerDeleteArtifact = "SageMaker.DeleteArtifact"
}
export declare class DeleteArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteArtifactXAmzTargetEnum;
}
export declare class DeleteArtifactRequest extends SpeakeasyBase {
    headers: DeleteArtifactHeaders;
    request: shared.DeleteArtifactRequest;
}
export declare class DeleteArtifactResponse extends SpeakeasyBase {
    contentType: string;
    deleteArtifactResponse?: shared.DeleteArtifactResponse;
    resourceNotFound?: any;
    statusCode: number;
}
