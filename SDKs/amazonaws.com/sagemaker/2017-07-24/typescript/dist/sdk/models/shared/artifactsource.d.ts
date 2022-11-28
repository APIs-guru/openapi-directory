import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSourceType } from "./artifactsourcetype";
/**
 * A structure describing the source of an artifact.
**/
export declare class ArtifactSource extends SpeakeasyBase {
    sourceTypes?: ArtifactSourceType[];
    sourceUri: string;
}
