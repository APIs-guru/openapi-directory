import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Goal } from "./goal";



// Goals
/** 
 * A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
**/
export class Goals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Goal })
  items?: Goal[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
