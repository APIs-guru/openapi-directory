import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeScanningAlertLocation
/** 
 * Describe a region within a file for the alert.
**/
export class CodeScanningAlertLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_column" })
  endColumn?: number;

  @Metadata({ data: "json, name=end_line" })
  endLine?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=start_column" })
  startColumn?: number;

  @Metadata({ data: "json, name=start_line" })
  startLine?: number;
}
