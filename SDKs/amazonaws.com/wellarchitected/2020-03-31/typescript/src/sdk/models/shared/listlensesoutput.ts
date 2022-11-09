import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LensSummary } from "./lenssummary";


// ListLensesOutput
/** 
 * Output of a list lenses call.
**/
export class ListLensesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensSummaries", elemType: shared.LensSummary })
  lensSummaries?: LensSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
