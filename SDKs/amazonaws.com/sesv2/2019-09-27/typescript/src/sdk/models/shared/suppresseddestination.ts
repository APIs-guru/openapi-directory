import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuppressedDestinationAttributes } from "./suppresseddestinationattributes";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";


// SuppressedDestination
/** 
 * An object that contains information about an email address that is on the suppression list for your account.
**/
export class SuppressedDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: SuppressedDestinationAttributes;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime: Date;

  @Metadata({ data: "json, name=Reason" })
  reason: SuppressionListReasonEnum;
}
