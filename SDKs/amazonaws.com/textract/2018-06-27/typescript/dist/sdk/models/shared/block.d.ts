import { SpeakeasyBase } from "../../../internal/utils";
import { BlockTypeEnum } from "./blocktypeenum";
import { EntityTypeEnum } from "./entitytypeenum";
import { Geometry } from "./geometry";
import { Relationship } from "./relationship";
import { SelectionStatusEnum } from "./selectionstatusenum";
import { TextTypeEnum } from "./texttypeenum";
/**
 * <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>
**/
export declare class Block extends SpeakeasyBase {
    blockType?: BlockTypeEnum;
    columnIndex?: number;
    columnSpan?: number;
    confidence?: number;
    entityTypes?: EntityTypeEnum[];
    geometry?: Geometry;
    id?: string;
    page?: number;
    relationships?: Relationship[];
    rowIndex?: number;
    rowSpan?: number;
    selectionStatus?: SelectionStatusEnum;
    text?: string;
    textType?: TextTypeEnum;
}
