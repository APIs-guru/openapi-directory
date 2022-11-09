import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
/**
 * Models a single artifact from the result set returned when searching for artifacts.
**/
export declare class SearchedArtifact extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description?: string;
    id: string;
    labels?: string[];
    modifiedBy?: string;
    modifiedOn?: Date;
    name?: string;
    state: ArtifactStateEnum;
    type: ArtifactTypeEnum;
}
