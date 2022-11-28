import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeSearch } from "./committeesearch";



export class CommitteeSearchList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: CommitteeSearch })
  results?: CommitteeSearch[];
}
