import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PepMonitorUnregisterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PepMonitorUnregisterSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class PepMonitorUnregisterRequest extends SpeakeasyBase {
    pathParams: PepMonitorUnregisterPathParams;
    security: PepMonitorUnregisterSecurity;
}
export declare class PepMonitorUnregisterResponse extends SpeakeasyBase {
    contentType: string;
    pepMonitorUnregister200ApplicationJsonAny?: any;
    pepMonitorUnregisterDefaultApplicationJsonAny?: any;
    statusCode: number;
}
