import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostSaleAuthenticationProgram
/** 
 * This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.
**/
export class PostSaleAuthenticationProgram extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outcomeReason" })
  outcomeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
