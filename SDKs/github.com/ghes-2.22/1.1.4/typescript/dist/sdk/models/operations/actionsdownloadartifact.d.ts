import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDownloadArtifactPathParams extends SpeakeasyBase {
    archiveFormat: string;
    artifactId: number;
    owner: string;
    repo: string;
}
export declare class ActionsDownloadArtifactRequest extends SpeakeasyBase {
    pathParams: ActionsDownloadArtifactPathParams;
}
export declare class ActionsDownloadArtifactResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
