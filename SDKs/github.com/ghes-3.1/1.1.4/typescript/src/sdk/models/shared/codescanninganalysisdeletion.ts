import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeScanningAnalysisDeletion
/** 
 * Successful deletion of a code scanning analysis
**/
export class CodeScanningAnalysisDeletion extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirm_delete_url" })
  confirmDeleteUrl: string;

  @Metadata({ data: "json, name=next_analysis_url" })
  nextAnalysisUrl: string;
}
