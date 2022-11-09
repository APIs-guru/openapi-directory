import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateForkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateForkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=org" })
  org?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=organization" })
  organization?: string;
}


export class ReposCreateForkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: string;
}


export class ReposCreateForkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateForkPathParams;

  @Metadata()
  queryParams: ReposCreateForkQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateForkRequestBody;
}


export class ReposCreateForkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  repository?: shared.Repository;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  validationError?: shared.ValidationError;
}
