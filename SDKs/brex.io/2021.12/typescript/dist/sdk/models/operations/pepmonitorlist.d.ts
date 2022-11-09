import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PepMonitorListSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class PepMonitorListRequest extends SpeakeasyBase {
    security: PepMonitorListSecurity;
}
export declare class PepMonitorListResponse extends SpeakeasyBase {
    contentType: string;
    pepMonitorList200ApplicationJsonAnies?: any[];
    pepMonitorListDefaultApplicationJsonAny?: any;
    statusCode: number;
}
