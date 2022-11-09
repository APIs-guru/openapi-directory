import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateInformationAboutPagesSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum {
    GhPages = "gh-pages"
,    Master = "master"
,    MasterDocs = "master /docs"
}


export class ReposUpdateInformationAboutPagesSiteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=https_enforced" })
  httpsEnforced?: boolean;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=source" })
  source?: ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum;
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
