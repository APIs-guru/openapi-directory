import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MinimalRepository } from "./minimalrepository";
import { SimpleCommitStatus } from "./simplecommitstatus";


// CombinedCommitStatus
/** 
 * Combined Commit Status
**/
export class CombinedCommitStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit_url" })
  commitUrl: string;

  @Metadata({ data: "json, name=repository" })
  repository: MinimalRepository;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=statuses", elemType: shared.SimpleCommitStatus })
  statuses: SimpleCommitStatus[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}
