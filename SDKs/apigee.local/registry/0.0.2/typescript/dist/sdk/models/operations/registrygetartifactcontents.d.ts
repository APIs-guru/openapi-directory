import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryGetArtifactContentsPathParams extends SpeakeasyBase {
    artifact: string;
    project: string;
}
export declare class RegistryGetArtifactContentsRequest extends SpeakeasyBase {
    pathParams: RegistryGetArtifactContentsPathParams;
}
export declare class RegistryGetArtifactContentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
