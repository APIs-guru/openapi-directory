import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateArtifactXAmzTargetEnum {
    SageMakerUpdateArtifact = "SageMaker.UpdateArtifact"
}
export declare class UpdateArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateArtifactXAmzTargetEnum;
}
export declare class UpdateArtifactRequest extends SpeakeasyBase {
    headers: UpdateArtifactHeaders;
    request: shared.UpdateArtifactRequest;
}
export declare class UpdateArtifactResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
    updateArtifactResponse?: shared.UpdateArtifactResponse;
}
