import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmoduleLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=git" })
  git: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


// ContentSubmodule
/** 
 * An object describing a symlink
**/
export class ContentSubmodule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ContentSubmoduleLinks;

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

  @SpeakeasyMetadata({ data: "json, name=submodule_git_url" })
  submoduleGitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
