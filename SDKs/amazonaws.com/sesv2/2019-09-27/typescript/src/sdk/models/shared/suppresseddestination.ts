import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuppressedDestinationAttributes } from "./suppresseddestinationattributes";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";



// SuppressedDestination
/** 
 * An object that contains information about an email address that is on the suppression list for your account.
**/
export class SuppressedDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: SuppressedDestinationAttributes;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason: SuppressionListReasonEnum;
}
