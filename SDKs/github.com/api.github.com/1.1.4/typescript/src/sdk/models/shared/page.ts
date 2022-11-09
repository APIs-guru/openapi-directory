import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PagesSourceHash } from "./pagessourcehash";

export enum PageStatusEnum {
    Built = "built"
,    Building = "building"
,    Errored = "errored"
}


// Page
/** 
 * The configuration for GitHub Pages for a repository.
**/
export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=cname" })
  cname: string;

  @Metadata({ data: "json, name=custom_404" })
  custom404: boolean;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=public" })
  public: boolean;

  @Metadata({ data: "json, name=source" })
  source?: PagesSourceHash;

  @Metadata({ data: "json, name=status" })
  status: PageStatusEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
