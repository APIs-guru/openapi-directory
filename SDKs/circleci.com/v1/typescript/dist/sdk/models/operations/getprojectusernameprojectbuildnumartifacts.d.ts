import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectBuildNumArtifactsPathParams extends SpeakeasyBase {
    buildNum: number;
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectBuildNumArtifactsRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectBuildNumArtifactsPathParams;
}
export declare class GetProjectUsernameProjectBuildNumArtifactsResponse extends SpeakeasyBase {
    artifacts?: shared.Artifact[];
    contentType: string;
    statusCode: number;
}
