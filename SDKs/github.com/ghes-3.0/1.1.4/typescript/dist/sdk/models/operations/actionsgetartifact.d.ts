import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetArtifactPathParams extends SpeakeasyBase {
    artifactId: number;
    owner: string;
    repo: string;
}
export declare class ActionsGetArtifactRequest extends SpeakeasyBase {
    pathParams: ActionsGetArtifactPathParams;
}
export declare class ActionsGetArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    artifact?: shared.Artifact;
}
