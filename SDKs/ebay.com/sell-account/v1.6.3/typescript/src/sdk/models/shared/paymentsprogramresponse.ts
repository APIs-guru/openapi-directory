import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentsProgramResponse
/** 
 * The response object containing the sellers status with regards to the specified payment program.
**/
export class PaymentsProgramResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentsProgramType" })
  paymentsProgramType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=wasPreviouslyOptedIn" })
  wasPreviouslyOptedIn?: boolean;
}
