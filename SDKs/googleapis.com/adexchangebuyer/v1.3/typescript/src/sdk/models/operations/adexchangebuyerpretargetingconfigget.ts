import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerPretargetingConfigGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class AdexchangebuyerPretargetingConfigGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerPretargetingConfigGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerPretargetingConfigGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerPretargetingConfigGetPathParams;

  @Metadata()
  queryParams: AdexchangebuyerPretargetingConfigGetQueryParams;

  @Metadata()
  security: AdexchangebuyerPretargetingConfigGetSecurity;
}


export class AdexchangebuyerPretargetingConfigGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pretargetingConfig?: shared.PretargetingConfig;

  @Metadata()
  statusCode: number;
}
