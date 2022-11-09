import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryGetArtifactPathParams extends SpeakeasyBase {
    artifact: string;
    project: string;
}
export declare class RegistryGetArtifactRequest extends SpeakeasyBase {
    pathParams: RegistryGetArtifactPathParams;
}
export declare class RegistryGetArtifactResponse extends SpeakeasyBase {
    artifact?: any;
    contentType: string;
    statusCode: number;
}
