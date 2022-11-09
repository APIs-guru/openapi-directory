import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmoduleLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=git" })
  git: string;

  @Metadata({ data: "json, name=html" })
  html: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}


// ContentSubmodule
/** 
 * An object describing a symlink
**/
export class ContentSubmodule extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: ContentSubmoduleLinks;

  @Metadata({ data: "json, name=download_url" })
  downloadUrl: string;

  @Metadata({ data: "json, name=git_url" })
  gitUrl: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=submodule_git_url" })
  submoduleGitUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
