import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Destination
/** 
 * An object that describes the recipients for an email.
**/
export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BccAddresses" })
  bccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=CcAddresses" })
  ccAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=ToAddresses" })
  toAddresses?: string[];
}
