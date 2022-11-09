import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyAnnouncementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyAnnouncementSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyAnnouncementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyAnnouncementPathParams;

  @Metadata()
  security: CompanyAnnouncementSecurity;
}


export class CompanyAnnouncementResponse extends SpeakeasyBase {
  @Metadata()
  companyAnnouncement200ApplicationJsonAnies?: any[];

  @Metadata()
  companyAnnouncementDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
