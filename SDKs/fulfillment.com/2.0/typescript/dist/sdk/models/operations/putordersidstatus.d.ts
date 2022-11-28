import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOrdersIdStatusPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutOrdersIdStatusStatusTypeSimpleV2Status extends SpeakeasyBase {
    code: string;
}
export declare class PutOrdersIdStatusStatusTypeSimpleV2 extends SpeakeasyBase {
    reason: string;
    status: PutOrdersIdStatusStatusTypeSimpleV2Status;
}
export declare class PutOrdersIdStatusSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class PutOrdersIdStatusRequest extends SpeakeasyBase {
    pathParams: PutOrdersIdStatusPathParams;
    request: PutOrdersIdStatusStatusTypeSimpleV2;
    security: PutOrdersIdStatusSecurity;
}
export declare class PutOrdersIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
