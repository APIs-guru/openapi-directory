import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOrdersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteOrdersIdSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class DeleteOrdersIdRequest extends SpeakeasyBase {
    pathParams: DeleteOrdersIdPathParams;
    security: DeleteOrdersIdSecurity;
}
export declare class DeleteOrdersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
    oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
