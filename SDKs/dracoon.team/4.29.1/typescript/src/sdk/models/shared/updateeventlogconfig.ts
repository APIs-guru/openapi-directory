import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateEventlogConfig
/** 
 * Request model for updating eventlog settings
**/
export class UpdateEventlogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: number;
}
