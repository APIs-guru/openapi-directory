import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSource } from "./experimentsource";
/**
 * A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>.
**/
export declare class ExperimentSummary extends SpeakeasyBase {
    creationTime?: Date;
    displayName?: string;
    experimentArn?: string;
    experimentName?: string;
    experimentSource?: ExperimentSource;
    lastModifiedTime?: Date;
}
