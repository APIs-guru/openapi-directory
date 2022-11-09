import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableReference } from "./tablereference";


export class SnapshotDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseTableReference" })
  baseTableReference?: TableReference;

  @Metadata({ data: "json, name=snapshotTime" })
  snapshotTime?: Date;
}
