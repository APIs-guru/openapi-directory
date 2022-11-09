import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentSource } from "./experimentsource";


// ExperimentSummary
/** 
 * A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>.
**/
export class ExperimentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;

  @Metadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @Metadata({ data: "json, name=ExperimentSource" })
  experimentSource?: ExperimentSource;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
