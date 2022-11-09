import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ByteMatchSetSummary } from "./bytematchsetsummary";


export class ListByteMatchSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByteMatchSets", elemType: shared.ByteMatchSetSummary })
  byteMatchSets?: ByteMatchSetSummary[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
