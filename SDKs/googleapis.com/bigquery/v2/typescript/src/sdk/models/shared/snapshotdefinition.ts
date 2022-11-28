import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";



export class SnapshotDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseTableReference" })
  baseTableReference?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=snapshotTime" })
  snapshotTime?: Date;
}
