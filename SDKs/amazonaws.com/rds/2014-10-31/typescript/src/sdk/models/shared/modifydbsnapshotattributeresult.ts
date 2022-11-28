import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshotAttributesResult } from "./dbsnapshotattributesresult";



export class ModifyDbSnapshotAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSnapshotAttributesResult?: DbSnapshotAttributesResult;
}
