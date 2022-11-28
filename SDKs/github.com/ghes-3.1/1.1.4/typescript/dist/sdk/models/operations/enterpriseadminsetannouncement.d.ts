import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminSetAnnouncementRequest extends SpeakeasyBase {
    request?: shared.Announcement;
}
export declare class EnterpriseAdminSetAnnouncementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    announcement?: shared.Announcement;
}
