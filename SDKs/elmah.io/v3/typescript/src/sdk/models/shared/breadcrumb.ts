import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Breadcrumb
/** 
 * A breadcrumb represent a step preceding a log message.
**/
export class Breadcrumb extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;
}
