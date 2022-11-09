import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { Source } from "./source";
export declare class CreateRobotApplicationVersionResponse extends SpeakeasyBase {
    arn?: string;
    environment?: Environment;
    lastUpdatedAt?: Date;
    name?: string;
    revisionId?: string;
    robotSoftwareSuite?: RobotSoftwareSuite;
    sources?: Source[];
    version?: string;
}
