import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";


// IssueEventForIssue
/** 
 * Issue Event for Issue
**/
export class IssueEventForIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor?: SimpleUser;

  @Metadata({ data: "json, name=author_association" })
  authorAssociation?: AuthorAssociationEnum;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=body_html" })
  bodyHtml?: string;

  @Metadata({ data: "json, name=body_text" })
  bodyText?: string;

  @Metadata({ data: "json, name=commit_id" })
  commitId?: string;

  @Metadata({ data: "json, name=commit_url" })
  commitUrl?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=event" })
  event?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=issue_url" })
  issueUrl?: string;

  @Metadata({ data: "json, name=lock_reason" })
  lockReason?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=pull_request_url" })
  pullRequestUrl?: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=submitted_at" })
  submittedAt?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
