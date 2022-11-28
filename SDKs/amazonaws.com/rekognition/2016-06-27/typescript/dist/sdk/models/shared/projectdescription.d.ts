import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";
/**
 * A description of a Amazon Rekognition Custom Labels project.
**/
export declare class ProjectDescription extends SpeakeasyBase {
    creationTimestamp?: Date;
    projectArn?: string;
    status?: ProjectStatusEnum;
}
