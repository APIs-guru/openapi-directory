import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { Source } from "./source";
export declare class CreateRobotApplicationResponse extends SpeakeasyBase {
    arn?: string;
    environment?: Environment;
    lastUpdatedAt?: Date;
    name?: string;
    revisionId?: string;
    robotSoftwareSuite?: RobotSoftwareSuite;
    sources?: Source[];
    tags?: Map<string, string>;
    version?: string;
}
