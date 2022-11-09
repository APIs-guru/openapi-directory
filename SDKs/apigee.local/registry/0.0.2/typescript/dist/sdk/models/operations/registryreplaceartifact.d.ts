import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryReplaceArtifactPathParams extends SpeakeasyBase {
    artifact: string;
    project: string;
}
export declare class RegistryReplaceArtifactRequest extends SpeakeasyBase {
    pathParams: RegistryReplaceArtifactPathParams;
    request: any;
}
export declare class RegistryReplaceArtifactResponse extends SpeakeasyBase {
    artifact?: any;
    contentType: string;
    statusCode: number;
}
