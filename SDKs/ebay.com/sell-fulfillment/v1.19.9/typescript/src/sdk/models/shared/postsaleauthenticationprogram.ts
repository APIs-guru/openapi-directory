import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostSaleAuthenticationProgram
/** 
 * This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.
**/
export class PostSaleAuthenticationProgram extends SpeakeasyBase {
  @Metadata({ data: "json, name=outcomeReason" })
  outcomeReason?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
