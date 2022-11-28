import { SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobDataAttributes } from "./labelingjobdataattributes";
import { LabelingJobDataSource } from "./labelingjobdatasource";
/**
 * Input configuration information for a labeling job.
**/
export declare class LabelingJobInputConfig extends SpeakeasyBase {
    dataAttributes?: LabelingJobDataAttributes;
    dataSource: LabelingJobDataSource;
}
