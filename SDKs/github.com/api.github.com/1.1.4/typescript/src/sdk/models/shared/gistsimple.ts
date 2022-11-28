import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";



export class GistSimpleFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=raw_url" })
  rawUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GistSimple
/** 
 * Gist Simple
**/
export class GistSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: number;

  @SpeakeasyMetadata({ data: "json, name=comments_url" })
  commentsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=commits_url" })
  commitsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: GistSimpleFiles })
  files?: Map<string, GistSimpleFiles>;

  @SpeakeasyMetadata({ data: "json, name=forks_url" })
  forksUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_pull_url" })
  gitPullUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_push_url" })
  gitPushUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
