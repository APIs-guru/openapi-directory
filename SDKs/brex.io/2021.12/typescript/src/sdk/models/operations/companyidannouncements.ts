import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyIdAnnouncementsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyIdAnnouncementsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=data" })
  data?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class CompanyIdAnnouncementsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyIdAnnouncementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyIdAnnouncementsPathParams;

  @SpeakeasyMetadata()
  queryParams: CompanyIdAnnouncementsQueryParams;

  @SpeakeasyMetadata()
  security: CompanyIdAnnouncementsSecurity;
}


export class CompanyIdAnnouncementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyIdAnnouncements200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyIdAnnouncementsDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
