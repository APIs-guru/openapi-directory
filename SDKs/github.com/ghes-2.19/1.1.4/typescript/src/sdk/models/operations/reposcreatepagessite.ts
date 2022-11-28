import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreatePagesSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposCreatePagesSiteRequestBodySourceBranchEnum {
    Master = "master",
    GhPages = "gh-pages"
}

export enum ReposCreatePagesSiteRequestBodySourcePathEnum {
    Root = "/",
    RootDocs = "/docs"
}


// ReposCreatePagesSiteRequestBodySource
/** 
 * The source branch and directory used to publish your Pages site.
**/
export class ReposCreatePagesSiteRequestBodySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: ReposCreatePagesSiteRequestBodySourceBranchEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: ReposCreatePagesSiteRequestBodySourcePathEnum;
}


// ReposCreatePagesSiteRequestBody
/** 
 * The source branch and directory used to publish your Pages site.
**/
export class ReposCreatePagesSiteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ReposCreatePagesSiteRequestBodySource;
}


export class ReposCreatePagesSite415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReposCreatePagesSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreatePagesSitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreatePagesSiteRequestBody;
}


export class ReposCreatePagesSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  page?: shared.Page;

  @SpeakeasyMetadata()
  reposCreatePagesSite415ApplicationJsonObject?: ReposCreatePagesSite415ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
