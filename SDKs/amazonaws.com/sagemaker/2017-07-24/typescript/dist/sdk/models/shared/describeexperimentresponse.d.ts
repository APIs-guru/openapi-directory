import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ExperimentSource } from "./experimentsource";
export declare class DescribeExperimentResponse extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    displayName?: string;
    experimentArn?: string;
    experimentName?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    source?: ExperimentSource;
}
