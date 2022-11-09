import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LicenseContentLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=git" })
  git: string;

  @Metadata({ data: "json, name=html" })
  html: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}


export class LicenseContentLicenseSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// LicenseContent
/** 
 * License Content
**/
export class LicenseContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: LicenseContentLinks;

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

  @Metadata({ data: "json, name=license" })
  license: LicenseContentLicenseSimple;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
