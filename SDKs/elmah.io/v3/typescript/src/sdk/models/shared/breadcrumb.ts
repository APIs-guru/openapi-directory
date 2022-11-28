import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Breadcrumb
/** 
 * A breadcrumb represent a step preceding a log message.
**/
export class Breadcrumb extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;
}
