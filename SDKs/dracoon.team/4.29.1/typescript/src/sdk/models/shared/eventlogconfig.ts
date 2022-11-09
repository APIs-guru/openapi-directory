import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventlogConfig
/** 
 * Eventlog settings
**/
export class EventlogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: number;
}
