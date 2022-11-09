import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Warning
/** 
 * A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>). 
**/
export class Warning extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=Pages" })
  pages?: number[];
}
