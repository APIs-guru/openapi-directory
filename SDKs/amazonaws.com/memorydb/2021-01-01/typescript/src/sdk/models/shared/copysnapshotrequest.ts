import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CopySnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=SourceSnapshotName" })
  sourceSnapshotName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetBucket" })
  targetBucket?: string;

  @Metadata({ data: "json, name=TargetSnapshotName" })
  targetSnapshotName: string;
}
