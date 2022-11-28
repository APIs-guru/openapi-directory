import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SizeConstraintSetSummary } from "./sizeconstraintsetsummary";



export class ListSizeConstraintSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=SizeConstraintSets", elemType: SizeConstraintSetSummary })
  sizeConstraintSets?: SizeConstraintSetSummary[];
}
