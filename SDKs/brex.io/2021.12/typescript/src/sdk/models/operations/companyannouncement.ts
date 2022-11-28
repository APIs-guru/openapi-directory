import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyAnnouncementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CompanyAnnouncementSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyAnnouncementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyAnnouncementPathParams;

  @SpeakeasyMetadata()
  security: CompanyAnnouncementSecurity;
}


export class CompanyAnnouncementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyAnnouncement200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyAnnouncementDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
