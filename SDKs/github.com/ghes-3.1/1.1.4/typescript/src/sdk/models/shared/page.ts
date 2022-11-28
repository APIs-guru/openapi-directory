import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagesHttpsCertificate } from "./pageshttpscertificate";
import { PagesSourceHash } from "./pagessourcehash";


export enum PageStatusEnum {
    Built = "built",
    Building = "building",
    Errored = "errored"
}


// Page
/** 
 * The configuration for GitHub Pages for a repository.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cname" })
  cname: string;

  @SpeakeasyMetadata({ data: "json, name=custom_404" })
  custom404: boolean;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=https_certificate" })
  httpsCertificate?: PagesHttpsCertificate;

  @SpeakeasyMetadata({ data: "json, name=https_enforced" })
  httpsEnforced?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: PagesSourceHash;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
