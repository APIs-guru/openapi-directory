import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDeleteArtifactPathParams extends SpeakeasyBase {
    artifactId: number;
    owner: string;
    repo: string;
}
export declare class ActionsDeleteArtifactRequest extends SpeakeasyBase {
    pathParams: ActionsDeleteArtifactPathParams;
}
export declare class ActionsDeleteArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
