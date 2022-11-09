import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateDiskSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskName" })
  diskName?: string;

  @Metadata({ data: "json, name=diskSnapshotName" })
  diskSnapshotName: string;

  @Metadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
