import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOrdersIdShipPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutOrdersIdShipOrderShipV2 extends SpeakeasyBase {
    trackingNumber: string;
    weightOverride?: number;
}
export declare class PutOrdersIdShipSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class PutOrdersIdShipRequest extends SpeakeasyBase {
    pathParams: PutOrdersIdShipPathParams;
    request: PutOrdersIdShipOrderShipV2;
    security: PutOrdersIdShipSecurity;
}
export declare class PutOrdersIdShipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
