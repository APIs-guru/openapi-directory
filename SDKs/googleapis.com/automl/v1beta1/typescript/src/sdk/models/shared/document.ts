import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentDimensions } from "./documentdimensions";
import { TextSnippet } from "./textsnippet";
import { DocumentInputConfig } from "./documentinputconfig";
import { Layout } from "./layout";



// Document
/** 
 * A structured text document e.g. a PDF.
**/
export class Document extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentDimensions" })
  documentDimensions?: DocumentDimensions;

  @SpeakeasyMetadata({ data: "json, name=documentText" })
  documentText?: TextSnippet;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: DocumentInputConfig;

  @SpeakeasyMetadata({ data: "json, name=layout", elemType: Layout })
  layout?: Layout[];

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount?: number;
}
