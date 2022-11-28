import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";



// UpdateAnswerOutput
/** 
 * Output of a update answer call.
**/
export class UpdateAnswerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Answer" })
  answer?: Answer;

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
