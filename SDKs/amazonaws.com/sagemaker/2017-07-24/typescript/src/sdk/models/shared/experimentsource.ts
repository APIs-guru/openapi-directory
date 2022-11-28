import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentSource
/** 
 * The source of the experiment.
**/
export class ExperimentSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
