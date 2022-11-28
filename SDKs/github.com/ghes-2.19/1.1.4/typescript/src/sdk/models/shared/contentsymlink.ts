import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSymlinkLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=git" })
  git: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


// ContentSymlink
/** 
 * An object describing a symlink
**/
export class ContentSymlink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ContentSymlinkLinks;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl: string;

  @SpeakeasyMetadata({ data: "json, name=git_url" })
  gitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
