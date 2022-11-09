import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPermissionsFailureEntry } from "./batchpermissionsfailureentry";


export class BatchRevokePermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Failures", elemType: shared.BatchPermissionsFailureEntry })
  failures?: BatchPermissionsFailureEntry[];
}
