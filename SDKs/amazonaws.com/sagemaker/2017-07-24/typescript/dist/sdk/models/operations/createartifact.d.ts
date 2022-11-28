import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateArtifactXAmzTargetEnum {
    SageMakerCreateArtifact = "SageMaker.CreateArtifact"
}
export declare class CreateArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateArtifactXAmzTargetEnum;
}
export declare class CreateArtifactRequest extends SpeakeasyBase {
    headers: CreateArtifactHeaders;
    request: shared.CreateArtifactRequest;
}
export declare class CreateArtifactResponse extends SpeakeasyBase {
    contentType: string;
    createArtifactResponse?: shared.CreateArtifactResponse;
    resourceLimitExceeded?: any;
    statusCode: number;
}
