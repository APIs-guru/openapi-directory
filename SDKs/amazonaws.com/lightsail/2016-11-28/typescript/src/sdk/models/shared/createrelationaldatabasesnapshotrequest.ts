import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSnapshotName" })
  relationalDatabaseSnapshotName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
