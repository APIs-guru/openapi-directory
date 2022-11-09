import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersScoutingObservationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;
}


export class GetV4LayersScoutingObservationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersScoutingObservationsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersScoutingObservationsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersScoutingObservationsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersScoutingObservationsSecurityOption2;
}


export class GetV4LayersScoutingObservationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV4LayersScoutingObservationsQueryParams;

  @Metadata()
  headers: GetV4LayersScoutingObservationsHeaders;

  @Metadata()
  security: GetV4LayersScoutingObservationsSecurity;
}


export class GetV4LayersScoutingObservationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  scoutingObservations?: any;

  @Metadata()
  statusCode: number;
}
