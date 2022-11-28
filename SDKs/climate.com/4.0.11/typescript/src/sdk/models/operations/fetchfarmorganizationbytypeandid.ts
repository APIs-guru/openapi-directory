import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FetchFarmOrganizationByTypeAndIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=farmOrganizationId" })
  farmOrganizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=farmOrganizationType" })
  farmOrganizationType: shared.FarmOrganizationTypeEnum;
}


export class FetchFarmOrganizationByTypeAndIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class FetchFarmOrganizationByTypeAndIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FetchFarmOrganizationByTypeAndIdPathParams;

  @SpeakeasyMetadata()
  security: FetchFarmOrganizationByTypeAndIdSecurity;
}


export class FetchFarmOrganizationByTypeAndIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  farmOrganization?: any;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
