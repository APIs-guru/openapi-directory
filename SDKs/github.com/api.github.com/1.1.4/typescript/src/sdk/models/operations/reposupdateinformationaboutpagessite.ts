import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateInformationAboutPagesSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum {
    GhPages = "gh-pages"
,    Master = "master"
,    MasterDocs = "master /docs"
}

export enum ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum {
    Root = "/"
,    RootDocs = "/docs"
}


// ReposUpdateInformationAboutPagesSiteRequestBodySource2
/** 
 * Update the source for the repository. Must include the branch name and path.
**/
export class ReposUpdateInformationAboutPagesSiteRequestBodySource2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch: string;

  @Metadata({ data: "json, name=path" })
  path: ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum;
}


export class ReposUpdateInformationAboutPagesSiteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cname" })
  cname?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=source" })
  source: any;
}


export class ReposUpdateInformationAboutPagesSiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdateInformationAboutPagesSitePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateInformationAboutPagesSiteRequestBody;
}


export class ReposUpdateInformationAboutPagesSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  validationError?: shared.ValidationError;
}
