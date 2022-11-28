import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByteMatchSetSummary } from "./bytematchsetsummary";



export class ListByteMatchSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByteMatchSets", elemType: ByteMatchSetSummary })
  byteMatchSets?: ByteMatchSetSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
