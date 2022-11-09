import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Answer } from "./answer";


// UpdateAnswerOutput
/** 
 * Output of a update answer call.
**/
export class UpdateAnswerOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Answer" })
  answer?: Answer;

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
