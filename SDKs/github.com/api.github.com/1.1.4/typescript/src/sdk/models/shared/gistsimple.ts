import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleUser } from "./simpleuser";


export class GistSimpleFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// GistSimple
/** 
 * Gist Simple
**/
export class GistSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: number;

  @Metadata({ data: "json, name=comments_url" })
  commentsUrl?: string;

  @Metadata({ data: "json, name=commits_url" })
  commitsUrl?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=files", elemType: shared.GistSimpleFiles })
  files?: Map<string, GistSimpleFiles>;

  @Metadata({ data: "json, name=forks_url" })
  forksUrl?: string;

  @Metadata({ data: "json, name=git_pull_url" })
  gitPullUrl?: string;

  @Metadata({ data: "json, name=git_push_url" })
  gitPushUrl?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: SimpleUser;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}
