import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyAnnouncementPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyAnnouncementSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyAnnouncementRequest extends SpeakeasyBase {
    pathParams: CompanyAnnouncementPathParams;
    security: CompanyAnnouncementSecurity;
}
export declare class CompanyAnnouncementResponse extends SpeakeasyBase {
    companyAnnouncement200ApplicationJsonAnies?: any[];
    companyAnnouncementDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
