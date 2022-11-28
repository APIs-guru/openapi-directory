import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrialSource
/** 
 * The source of the trial.
**/
export class TrialSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
