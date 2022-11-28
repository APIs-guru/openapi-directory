import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IndTaxDocuments
/** 
 * The tax documents required in AWS Regions in India.
**/
export class IndTaxDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GSTIN" })
  gstin?: string;
}
