import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { SimpleCommitStatus } from "./simplecommitstatus";



// CombinedCommitStatus
/** 
 * Combined Commit Status
**/
export class CombinedCommitStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit_url" })
  commitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: SimpleCommitStatus })
  statuses: SimpleCommitStatus[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
