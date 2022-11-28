import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SuppliersPutRequest extends SpeakeasyBase {
    pathParams: SuppliersPutPathParams;
    request: shared.SupplierDto;
}
export declare class SuppliersPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suppliersPut200ApplicationJsonObject?: Map<string, any>;
}
