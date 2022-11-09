import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FetchFarmOrganizationByTypeAndIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=farmOrganizationId" })
  farmOrganizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=farmOrganizationType" })
  farmOrganizationType: shared.FarmOrganizationTypeEnum;
}


export class FetchFarmOrganizationByTypeAndIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class FetchFarmOrganizationByTypeAndIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class FetchFarmOrganizationByTypeAndIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FetchFarmOrganizationByTypeAndIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FetchFarmOrganizationByTypeAndIdSecurityOption2;
}


export class FetchFarmOrganizationByTypeAndIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FetchFarmOrganizationByTypeAndIdPathParams;

  @Metadata()
  security: FetchFarmOrganizationByTypeAndIdSecurity;
}


export class FetchFarmOrganizationByTypeAndIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  farmOrganization?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
