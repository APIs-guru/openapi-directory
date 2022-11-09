import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreatePagesSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposCreatePagesSiteRequestBodySourcePathEnum {
    Root = "/"
,    RootDocs = "/docs"
}


// ReposCreatePagesSiteRequestBodySource
/** 
 * The source branch and directory used to publish your Pages site.
**/
export class ReposCreatePagesSiteRequestBodySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch: string;

  @Metadata({ data: "json, name=path" })
  path?: ReposCreatePagesSiteRequestBodySourcePathEnum;
}


// ReposCreatePagesSiteRequestBody
/** 
 * The source branch and directory used to publish your Pages site.
**/
export class ReposCreatePagesSiteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source: ReposCreatePagesSiteRequestBodySource;
}


export class ReposCreatePagesSiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreatePagesSitePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreatePagesSiteRequestBody;
}


export class ReposCreatePagesSite415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposCreatePagesSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  page?: shared.Page;

  @Metadata()
  reposCreatePagesSite415ApplicationJsonObject?: ReposCreatePagesSite415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
