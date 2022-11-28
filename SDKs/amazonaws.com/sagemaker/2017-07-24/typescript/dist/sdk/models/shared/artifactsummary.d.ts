import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSource } from "./artifactsource";
/**
 * Lists a summary of the properties of an artifact. An artifact represents a URI addressable object or data. Some examples are a dataset and a model.
**/
export declare class ArtifactSummary extends SpeakeasyBase {
    artifactArn?: string;
    artifactName?: string;
    artifactType?: string;
    creationTime?: Date;
    lastModifiedTime?: Date;
    source?: ArtifactSource;
}
