import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { AuthorAssociationEnum } from "./authorassociationenum";
/**
 * Issue Event for Issue
**/
export declare class IssueEventForIssue extends SpeakeasyBase {
    actor?: SimpleUser;
    authorAssociation?: AuthorAssociationEnum;
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    commitId?: string;
    commitUrl?: string;
    createdAt?: string;
    event?: string;
    htmlUrl?: string;
    id?: number;
    issueUrl?: string;
    lockReason?: string;
    message?: string;
    nodeId?: string;
    pullRequestUrl?: string;
    sha?: string;
    state?: string;
    submittedAt?: string;
    updatedAt?: string;
    url?: string;
}
