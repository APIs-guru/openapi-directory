import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobDataAttributes } from "./labelingjobdataattributes";
import { LabelingJobDataSource } from "./labelingjobdatasource";



// LabelingJobInputConfig
/** 
 * Input configuration information for a labeling job.
**/
export class LabelingJobInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAttributes" })
  dataAttributes?: LabelingJobDataAttributes;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: LabelingJobDataSource;
}
