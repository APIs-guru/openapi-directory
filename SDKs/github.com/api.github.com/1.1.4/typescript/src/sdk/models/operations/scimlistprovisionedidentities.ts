import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimListProvisionedIdentitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ScimListProvisionedIdentitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class ScimListProvisionedIdentitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScimListProvisionedIdentitiesPathParams;

  @Metadata()
  queryParams: ScimListProvisionedIdentitiesQueryParams;
}


export class ScimListProvisionedIdentitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  scimUserList?: shared.ScimUserList;
}
