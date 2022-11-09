import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersAsPlantedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" })
  resourceOwnerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: Date;
}


export class GetV4LayersAsPlantedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersAsPlantedSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersAsPlantedSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsPlantedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersAsPlantedSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersAsPlantedSecurityOption2;
}


export class GetV4LayersAsPlantedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV4LayersAsPlantedQueryParams;

  @Metadata()
  headers: GetV4LayersAsPlantedHeaders;

  @Metadata()
  security: GetV4LayersAsPlantedSecurity;
}


export class GetV4LayersAsPlantedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  plantingActivities?: any;

  @Metadata()
  statusCode: number;
}
