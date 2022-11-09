import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsProvisioningCreateAccountTicketQueryParams extends SpeakeasyBase {
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


export class AnalyticsProvisioningCreateAccountTicketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsProvisioningCreateAccountTicketRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AnalyticsProvisioningCreateAccountTicketQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AccountTicket;

  @Metadata()
  security: AnalyticsProvisioningCreateAccountTicketSecurity;
}


export class AnalyticsProvisioningCreateAccountTicketResponse extends SpeakeasyBase {
  @Metadata()
  accountTicket?: shared.AccountTicket;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
