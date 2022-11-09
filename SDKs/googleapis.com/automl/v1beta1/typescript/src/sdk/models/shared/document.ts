import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentDimensions } from "./documentdimensions";
import { TextSnippet } from "./textsnippet";
import { DocumentInputConfig } from "./documentinputconfig";
import { Layout } from "./layout";


// Document
/** 
 * A structured text document e.g. a PDF.
**/
export class Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentDimensions" })
  documentDimensions?: DocumentDimensions;

  @Metadata({ data: "json, name=documentText" })
  documentText?: TextSnippet;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: DocumentInputConfig;

  @Metadata({ data: "json, name=layout", elemType: shared.Layout })
  layout?: Layout[];

  @Metadata({ data: "json, name=pageCount" })
  pageCount?: number;
}
