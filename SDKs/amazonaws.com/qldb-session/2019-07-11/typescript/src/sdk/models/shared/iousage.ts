import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IoUsage
/** 
 * Contains I/O usage metrics for a command that was invoked.
**/
export class IoUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReadIOs" })
  readIOs?: number;

  @SpeakeasyMetadata({ data: "json, name=WriteIOs" })
  writeIOs?: number;
}
