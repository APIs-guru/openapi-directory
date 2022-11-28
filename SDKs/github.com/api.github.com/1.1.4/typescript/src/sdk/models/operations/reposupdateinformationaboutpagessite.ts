import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateInformationAboutPagesSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum {
    GhPages = "gh-pages",
    Master = "master",
    MasterDocs = "master /docs"
}

export enum ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum {
    Root = "/",
    RootDocs = "/docs"
}


// ReposUpdateInformationAboutPagesSiteRequestBodySource2
/** 
 * Update the source for the repository. Must include the branch name and path.
**/
export class ReposUpdateInformationAboutPagesSiteRequestBodySource2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum;
}


export class ReposUpdateInformationAboutPagesSiteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cname" })
  cname?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: any;
}


export class ReposUpdateInformationAboutPagesSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateInformationAboutPagesSitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateInformationAboutPagesSiteRequestBody;
}


export class ReposUpdateInformationAboutPagesSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
