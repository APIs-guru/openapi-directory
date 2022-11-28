import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";



// IssueEventForIssue
/** 
 * Issue Event for Issue
**/
export class IssueEventForIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=author_association" })
  authorAssociation?: AuthorAssociationEnum;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=body_html" })
  bodyHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=body_text" })
  bodyText?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_id" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_url" })
  commitUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=issue_url" })
  issueUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=lock_reason" })
  lockReason?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=pull_request_url" })
  pullRequestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=submitted_at" })
  submittedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
