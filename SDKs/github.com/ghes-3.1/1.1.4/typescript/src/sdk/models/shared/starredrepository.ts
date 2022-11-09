import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Repository } from "./repository";


// StarredRepository
/** 
 * Starred Repository
**/
export class StarredRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=repo" })
  repo: Repository;

  @Metadata({ data: "json, name=starred_at" })
  starredAt: Date;
}
