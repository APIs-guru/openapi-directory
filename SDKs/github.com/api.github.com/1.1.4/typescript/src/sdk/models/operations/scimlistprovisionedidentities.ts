import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScimListProvisionedIdentitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ScimListProvisionedIdentitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class ScimListProvisionedIdentitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScimListProvisionedIdentitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: ScimListProvisionedIdentitiesQueryParams;
}


export class ScimListProvisionedIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  scimUserList?: shared.ScimUserList;
}
