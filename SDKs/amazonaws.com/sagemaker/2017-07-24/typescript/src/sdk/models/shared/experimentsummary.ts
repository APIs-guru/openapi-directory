import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSource } from "./experimentsource";



// ExperimentSummary
/** 
 * A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>.
**/
export class ExperimentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExperimentSource" })
  experimentSource?: ExperimentSource;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
