import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IndTaxDocuments
/** 
 * The tax documents required in AWS Regions in India.
**/
export class IndTaxDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=GSTIN" })
  gstin?: string;
}
