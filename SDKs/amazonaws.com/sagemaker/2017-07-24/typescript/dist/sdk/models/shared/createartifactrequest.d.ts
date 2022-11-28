import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { ArtifactSource } from "./artifactsource";
import { Tag } from "./tag";
export declare class CreateArtifactRequest extends SpeakeasyBase {
    artifactName?: string;
    artifactType: string;
    metadataProperties?: MetadataProperties;
    properties?: Map<string, string>;
    source: ArtifactSource;
    tags?: Tag[];
}
