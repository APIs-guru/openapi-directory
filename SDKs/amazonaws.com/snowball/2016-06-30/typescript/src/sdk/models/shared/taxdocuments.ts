import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IndTaxDocuments } from "./indtaxdocuments";


// TaxDocuments
/** 
 * The tax documents required in your AWS Region.
**/
export class TaxDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=IND" })
  ind?: IndTaxDocuments;
}
