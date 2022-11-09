import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryCreateArtifactPathParams extends SpeakeasyBase {
    project: string;
}
export declare class RegistryCreateArtifactQueryParams extends SpeakeasyBase {
    artifactId?: string;
}
export declare class RegistryCreateArtifactRequest extends SpeakeasyBase {
    pathParams: RegistryCreateArtifactPathParams;
    queryParams: RegistryCreateArtifactQueryParams;
    request: any;
}
export declare class RegistryCreateArtifactResponse extends SpeakeasyBase {
    artifact?: any;
    contentType: string;
    statusCode: number;
}
