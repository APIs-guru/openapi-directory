import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentSource
/** 
 * The source of the experiment.
**/
export class ExperimentSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceArn" })
  sourceArn: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
