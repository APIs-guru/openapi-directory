import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReleaseAsset } from "./releaseasset";
import { SimpleUser } from "./simpleuser";
import { ReactionRollup } from "./reactionrollup";


// Release
/** 
 * A release.
**/
export class Release extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.ReleaseAsset })
  assets: ReleaseAsset[];

  @Metadata({ data: "json, name=assets_url" })
  assetsUrl: string;

  @Metadata({ data: "json, name=author" })
  author: SimpleUser;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=body_html" })
  bodyHtml?: string;

  @Metadata({ data: "json, name=body_text" })
  bodyText?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=draft" })
  draft: boolean;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=prerelease" })
  prerelease: boolean;

  @Metadata({ data: "json, name=published_at" })
  publishedAt: Date;

  @Metadata({ data: "json, name=reactions" })
  reactions?: ReactionRollup;

  @Metadata({ data: "json, name=tag_name" })
  tagName: string;

  @Metadata({ data: "json, name=tarball_url" })
  tarballUrl: string;

  @Metadata({ data: "json, name=target_commitish" })
  targetCommitish: string;

  @Metadata({ data: "json, name=upload_url" })
  uploadUrl: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=zipball_url" })
  zipballUrl: string;
}
