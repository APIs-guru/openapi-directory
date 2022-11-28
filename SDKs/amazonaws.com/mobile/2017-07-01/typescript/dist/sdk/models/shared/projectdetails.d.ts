import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
import { ProjectStateEnum } from "./projectstateenum";
/**
 *  Detailed information about an AWS Mobile Hub project.
**/
export declare class ProjectDetails extends SpeakeasyBase {
    consoleUrl?: string;
    createdDate?: Date;
    lastUpdatedDate?: Date;
    name?: string;
    projectId?: string;
    region?: string;
    resources?: Resource[];
    state?: ProjectStateEnum;
}
