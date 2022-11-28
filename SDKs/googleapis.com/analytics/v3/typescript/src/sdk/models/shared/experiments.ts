import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Experiment } from "./experiment";



// Experiments
/** 
 * An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
**/
export class Experiments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Experiment })
  items?: Experiment[];

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
