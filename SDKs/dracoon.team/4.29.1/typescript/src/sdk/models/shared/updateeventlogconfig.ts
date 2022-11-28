import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateEventlogConfig
/** 
 * Request model for updating eventlog settings
**/
export class UpdateEventlogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logIpEnabled" })
  logIpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: number;
}
