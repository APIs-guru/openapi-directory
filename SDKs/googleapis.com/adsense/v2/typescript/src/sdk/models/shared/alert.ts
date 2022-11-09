import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AlertSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Severe = "SEVERE"
}


// Alert
/** 
 * Representation of an alert.
**/
export class Alert extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: AlertSeverityEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
