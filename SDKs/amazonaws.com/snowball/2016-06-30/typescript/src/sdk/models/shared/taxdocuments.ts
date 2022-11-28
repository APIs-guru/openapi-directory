import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndTaxDocuments } from "./indtaxdocuments";



// TaxDocuments
/** 
 * The tax documents required in your AWS Region.
**/
export class TaxDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IND" })
  ind?: IndTaxDocuments;
}
