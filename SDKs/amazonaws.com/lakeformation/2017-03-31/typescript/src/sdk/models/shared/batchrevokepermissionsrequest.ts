import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";



export class BatchRevokePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: BatchPermissionsRequestEntry })
  entries: BatchPermissionsRequestEntry[];
}
