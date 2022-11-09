import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SizeConstraintSetSummary } from "./sizeconstraintsetsummary";


export class ListSizeConstraintSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=SizeConstraintSets", elemType: shared.SizeConstraintSetSummary })
  sizeConstraintSets?: SizeConstraintSetSummary[];
}
