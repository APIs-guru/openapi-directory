import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IoUsage
/** 
 * Contains I/O usage metrics for a command that was invoked.
**/
export class IoUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReadIOs" })
  readIOs?: number;

  @Metadata({ data: "json, name=WriteIOs" })
  writeIOs?: number;
}
