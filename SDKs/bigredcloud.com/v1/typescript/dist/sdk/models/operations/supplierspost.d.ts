import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersPostRequest extends SpeakeasyBase {
    request: shared.SupplierDto;
}
export declare class SuppliersPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suppliersPost200ApplicationJsonObject?: Map<string, any>;
}
