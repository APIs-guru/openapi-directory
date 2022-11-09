import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PepRetrievePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum PepRetrieveAcceptEnum {
    ApplicationJson = "application/json",
    ApplicationPdf = "application/pdf"
}
export declare class PepRetrieveHeaders extends SpeakeasyBase {
    accept?: PepRetrieveAcceptEnum;
}
export declare class PepRetrieveSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class PepRetrieveRequest extends SpeakeasyBase {
    pathParams: PepRetrievePathParams;
    headers: PepRetrieveHeaders;
    security: PepRetrieveSecurity;
}
export declare class PepRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    pepRetrieve200ApplicationJsonAny?: any;
    pepRetrieveDefaultApplicationJsonAny?: any;
    statusCode: number;
}
