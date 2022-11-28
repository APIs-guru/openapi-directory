import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPermissionsFailureEntry } from "./batchpermissionsfailureentry";



export class BatchGrantPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Failures", elemType: BatchPermissionsFailureEntry })
  failures?: BatchPermissionsFailureEntry[];
}
