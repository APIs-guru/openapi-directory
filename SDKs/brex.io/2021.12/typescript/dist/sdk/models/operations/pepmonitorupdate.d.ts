import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PepMonitorUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PepMonitorUpdateRequestBody extends SpeakeasyBase {
    webhook?: string;
}
export declare class PepMonitorUpdateSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class PepMonitorUpdateRequest extends SpeakeasyBase {
    pathParams: PepMonitorUpdatePathParams;
    request?: PepMonitorUpdateRequestBody;
    security: PepMonitorUpdateSecurity;
}
export declare class PepMonitorUpdateResponse extends SpeakeasyBase {
    contentType: string;
    pepMonitorUpdate200ApplicationJsonAny?: any;
    pepMonitorUpdateDefaultApplicationJsonAny?: any;
    statusCode: number;
}
