import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentFileLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=git" })
  git: string;

  @Metadata({ data: "json, name=html" })
  html: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}


// ContentFile
/** 
 * Content File
**/
export class ContentFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: ContentFileLinks;

  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=download_url" })
  downloadUrl: string;

  @Metadata({ data: "json, name=encoding" })
  encoding: string;

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
  submoduleGitUrl?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
