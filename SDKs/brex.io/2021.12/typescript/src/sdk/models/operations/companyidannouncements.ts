import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyIdAnnouncementsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyIdAnnouncementsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=data" })
  data?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class CompanyIdAnnouncementsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyIdAnnouncementsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyIdAnnouncementsPathParams;

  @Metadata()
  queryParams: CompanyIdAnnouncementsQueryParams;

  @Metadata()
  security: CompanyIdAnnouncementsSecurity;
}


export class CompanyIdAnnouncementsResponse extends SpeakeasyBase {
  @Metadata()
  companyIdAnnouncements200ApplicationJsonAnies?: any[];

  @Metadata()
  companyIdAnnouncementsDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
