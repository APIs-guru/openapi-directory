import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>).
**/
export declare class Warning extends SpeakeasyBase {
    errorCode?: string;
    pages?: number[];
}
