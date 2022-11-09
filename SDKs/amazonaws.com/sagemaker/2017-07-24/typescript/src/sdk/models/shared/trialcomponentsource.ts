import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrialComponentSource
/** 
 * The Amazon Resource Name (ARN) and job type of the source of a trial component.
**/
export class TrialComponentSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceArn" })
  sourceArn: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
