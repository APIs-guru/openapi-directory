import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryDeleteArtifactPathParams extends SpeakeasyBase {
    artifact: string;
    project: string;
}
export declare class RegistryDeleteArtifactRequest extends SpeakeasyBase {
    pathParams: RegistryDeleteArtifactPathParams;
}
export declare class RegistryDeleteArtifactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
