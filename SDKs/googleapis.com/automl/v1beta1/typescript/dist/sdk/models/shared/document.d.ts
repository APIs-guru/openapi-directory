import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentDimensions } from "./documentdimensions";
import { TextSnippet } from "./textsnippet";
import { DocumentInputConfig } from "./documentinputconfig";
import { Layout } from "./layout";
/**
 * A structured text document e.g. a PDF.
**/
export declare class Document extends SpeakeasyBase {
    documentDimensions?: DocumentDimensions;
    documentText?: TextSnippet;
    inputConfig?: DocumentInputConfig;
    layout?: Layout[];
    pageCount?: number;
}
