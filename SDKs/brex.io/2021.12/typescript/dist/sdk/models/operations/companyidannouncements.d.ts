import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompanyIdAnnouncementsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompanyIdAnnouncementsQueryParams extends SpeakeasyBase {
    data?: boolean;
    limit?: number;
    offset?: number;
}
export declare class CompanyIdAnnouncementsSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyIdAnnouncementsRequest extends SpeakeasyBase {
    pathParams: CompanyIdAnnouncementsPathParams;
    queryParams: CompanyIdAnnouncementsQueryParams;
    security: CompanyIdAnnouncementsSecurity;
}
export declare class CompanyIdAnnouncementsResponse extends SpeakeasyBase {
    companyIdAnnouncements200ApplicationJsonAnies?: any[];
    companyIdAnnouncementsDefaultApplicationJsonAny?: any;
    contentType: string;
    statusCode: number;
}
