import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentsProgramResponse
/** 
 * The response object containing the sellers status with regards to the specified payment program.
**/
export class PaymentsProgramResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=paymentsProgramType" })
  paymentsProgramType?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=wasPreviouslyOptedIn" })
  wasPreviouslyOptedIn?: boolean;
}
