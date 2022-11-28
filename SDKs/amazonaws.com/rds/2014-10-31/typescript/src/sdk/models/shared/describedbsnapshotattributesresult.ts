import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshotAttributesResult } from "./dbsnapshotattributesresult";



export class DescribeDbSnapshotAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSnapshotAttributesResult?: DbSnapshotAttributesResult;
}
