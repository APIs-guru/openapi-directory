import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublisherAccount
/** 
 * A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
**/
export class PublisherAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherId" })
  publisherId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingTimeZone" })
  reportingTimeZone?: string;
}
