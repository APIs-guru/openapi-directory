import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
/**
 * Models a single artifact from the result set returned when searching for artifacts.
**/
export declare class SearchedVersion extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    labels?: string[];
    name?: string;
    state: ArtifactStateEnum;
    type: ArtifactTypeEnum;
    version: number;
}
