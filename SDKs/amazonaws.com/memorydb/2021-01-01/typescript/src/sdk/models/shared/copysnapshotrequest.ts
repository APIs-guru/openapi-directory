import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CopySnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceSnapshotName" })
  sourceSnapshotName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TargetBucket" })
  targetBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetSnapshotName" })
  targetSnapshotName: string;
}
