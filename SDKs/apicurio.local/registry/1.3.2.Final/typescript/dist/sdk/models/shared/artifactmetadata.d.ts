import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
export declare class ArtifactMetaData extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    id: string;
    labels?: string[];
    modifiedBy: string;
    modifiedOn: Date;
    name?: string;
    properties?: Map<string, string>;
    state: ArtifactStateEnum;
    type: ArtifactTypeEnum;
    version: number;
}
