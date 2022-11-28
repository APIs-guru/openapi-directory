import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Warning
/** 
 * A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>). 
**/
export class Warning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Pages" })
  pages?: number[];
}
