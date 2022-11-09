import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateInstanceSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;

  @Metadata({ data: "json, name=instanceSnapshotName" })
  instanceSnapshotName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
