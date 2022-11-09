import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommitteeSearch } from "./committeesearch";


export class CommitteeSearchList extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.CommitteeSearch })
  results?: CommitteeSearch[];
}
