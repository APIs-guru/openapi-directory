import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppengineAppsDomainMappingsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" })
  appsId: string;
}

export enum AppengineAppsDomainMappingsCreateOverrideStrategyEnum {
    UnspecifiedDomainOverrideStrategy = "UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY"
,    Strict = "STRICT"
,    Override = "OVERRIDE"
}


export class AppengineAppsDomainMappingsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=noManagedCertificate" })
  noManagedCertificate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=overrideStrategy" })
  overrideStrategy?: AppengineAppsDomainMappingsCreateOverrideStrategyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AppengineAppsDomainMappingsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsDomainMappingsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppengineAppsDomainMappingsCreatePathParams;

  @Metadata()
  queryParams: AppengineAppsDomainMappingsCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DomainMapping;

  @Metadata()
  security: AppengineAppsDomainMappingsCreateSecurity;
}


export class AppengineAppsDomainMappingsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
