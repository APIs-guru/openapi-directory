import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Destination
/** 
 * An object that describes the recipients for an email.
**/
export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=BccAddresses" })
  bccAddresses?: string[];

  @Metadata({ data: "json, name=CcAddresses" })
  ccAddresses?: string[];

  @Metadata({ data: "json, name=ToAddresses" })
  toAddresses?: string[];
}
