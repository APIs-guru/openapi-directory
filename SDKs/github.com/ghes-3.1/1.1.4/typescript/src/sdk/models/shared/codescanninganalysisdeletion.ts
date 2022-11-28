import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeScanningAnalysisDeletion
/** 
 * Successful deletion of a code scanning analysis
**/
export class CodeScanningAnalysisDeletion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirm_delete_url" })
  confirmDeleteUrl: string;

  @SpeakeasyMetadata({ data: "json, name=next_analysis_url" })
  nextAnalysisUrl: string;
}
