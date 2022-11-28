import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeScanningAlertLocation
/** 
 * Describe a region within a file for the alert.
**/
export class CodeScanningAlertLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_column" })
  endColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=end_line" })
  endLine?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=start_column" })
  startColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=start_line" })
  startLine?: number;
}
