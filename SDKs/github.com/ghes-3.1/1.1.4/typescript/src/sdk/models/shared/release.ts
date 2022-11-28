import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseAsset } from "./releaseasset";
import { SimpleUser } from "./simpleuser";
import { ReactionRollup } from "./reactionrollup";



// Release
/** 
 * A release.
**/
export class Release extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: ReleaseAsset })
  assets: ReleaseAsset[];

  @SpeakeasyMetadata({ data: "json, name=assets_url" })
  assetsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=body_html" })
  bodyHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=body_text" })
  bodyText?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft: boolean;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=prerelease" })
  prerelease: boolean;

  @SpeakeasyMetadata({ data: "json, name=published_at" })
  publishedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=reactions" })
  reactions?: ReactionRollup;

  @SpeakeasyMetadata({ data: "json, name=tag_name" })
  tagName: string;

  @SpeakeasyMetadata({ data: "json, name=tarball_url" })
  tarballUrl: string;

  @SpeakeasyMetadata({ data: "json, name=target_commitish" })
  targetCommitish: string;

  @SpeakeasyMetadata({ data: "json, name=upload_url" })
  uploadUrl: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=zipball_url" })
  zipballUrl: string;
}
