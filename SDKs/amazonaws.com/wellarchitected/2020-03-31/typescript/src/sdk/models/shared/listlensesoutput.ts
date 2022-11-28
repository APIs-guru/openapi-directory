import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensSummary } from "./lenssummary";



// ListLensesOutput
/** 
 * Output of a list lenses call.
**/
export class ListLensesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensSummaries", elemType: LensSummary })
  lensSummaries?: LensSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
