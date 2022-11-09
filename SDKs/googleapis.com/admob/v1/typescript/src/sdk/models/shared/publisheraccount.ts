import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublisherAccount
/** 
 * A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
**/
export class PublisherAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publisherId" })
  publisherId?: string;

  @Metadata({ data: "json, name=reportingTimeZone" })
  reportingTimeZone?: string;
}
