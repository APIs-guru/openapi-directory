import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventlogConfig
/** 
 * Eventlog settings
**/
export class EventlogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: number;
}
