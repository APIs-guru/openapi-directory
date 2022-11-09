import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";


export class BatchGrantPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Entries", elemType: shared.BatchPermissionsRequestEntry })
  entries: BatchPermissionsRequestEntry[];
}
