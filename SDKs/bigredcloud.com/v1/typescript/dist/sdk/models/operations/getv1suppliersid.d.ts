import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1SuppliersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1SuppliersIdQueryParams extends SpeakeasyBase {
    needBalance?: boolean;
}
export declare class GetV1SuppliersIdRequest extends SpeakeasyBase {
    pathParams: GetV1SuppliersIdPathParams;
    queryParams: GetV1SuppliersIdQueryParams;
}
export declare class GetV1SuppliersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supplierDto?: shared.SupplierDto;
}
