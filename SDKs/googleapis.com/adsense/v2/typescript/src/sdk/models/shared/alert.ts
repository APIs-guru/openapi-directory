import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AlertSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Severe = "SEVERE"
}


// Alert
/** 
 * Representation of an alert.
**/
export class Alert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: AlertSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
