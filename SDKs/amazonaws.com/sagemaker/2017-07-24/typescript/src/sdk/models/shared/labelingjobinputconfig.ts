import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelingJobDataAttributes } from "./labelingjobdataattributes";
import { LabelingJobDataSource } from "./labelingjobdatasource";


// LabelingJobInputConfig
/** 
 * Input configuration information for a labeling job.
**/
export class LabelingJobInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAttributes" })
  dataAttributes?: LabelingJobDataAttributes;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: LabelingJobDataSource;
}
