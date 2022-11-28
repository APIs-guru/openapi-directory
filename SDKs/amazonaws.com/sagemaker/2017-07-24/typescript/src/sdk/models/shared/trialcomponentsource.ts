import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrialComponentSource
/** 
 * The Amazon Resource Name (ARN) and job type of the source of a trial component.
**/
export class TrialComponentSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
