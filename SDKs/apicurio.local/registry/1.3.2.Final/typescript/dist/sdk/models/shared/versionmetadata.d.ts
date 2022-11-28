import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
export declare class VersionMetaData extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    id: string;
    labels?: string[];
    name?: string;
    properties?: Map<string, string>;
    state?: ArtifactStateEnum;
    type: ArtifactTypeEnum;
    version: number;
}
