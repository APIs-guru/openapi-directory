import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelingJobStoppingConditions
/** 
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note>
**/
export class LabelingJobStoppingConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxHumanLabeledObjectCount" })
  maxHumanLabeledObjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxPercentageOfInputDatasetLabeled" })
  maxPercentageOfInputDatasetLabeled?: number;
}
