import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrialSource
/** 
 * The source of the trial.
**/
export class TrialSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceArn" })
  sourceArn: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
