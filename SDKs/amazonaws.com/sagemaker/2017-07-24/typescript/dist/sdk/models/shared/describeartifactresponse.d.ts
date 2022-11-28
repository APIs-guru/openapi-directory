import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { ArtifactSource } from "./artifactsource";
export declare class DescribeArtifactResponse extends SpeakeasyBase {
    artifactArn?: string;
    artifactName?: string;
    artifactType?: string;
    createdBy?: UserContext;
    creationTime?: Date;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    metadataProperties?: MetadataProperties;
    properties?: Map<string, string>;
    source?: ArtifactSource;
}
