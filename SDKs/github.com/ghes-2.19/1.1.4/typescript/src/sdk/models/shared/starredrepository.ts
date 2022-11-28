import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";



// StarredRepository
/** 
 * Starred Repository
**/
export class StarredRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo: Repository;

  @SpeakeasyMetadata({ data: "json, name=starred_at" })
  starredAt: Date;
}
