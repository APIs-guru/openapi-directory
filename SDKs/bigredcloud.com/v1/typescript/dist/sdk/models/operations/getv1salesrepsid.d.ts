import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1SalesRepsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1SalesRepsIdRequest extends SpeakeasyBase {
    pathParams: GetV1SalesRepsIdPathParams;
}
export declare class GetV1SalesRepsIdResponse extends SpeakeasyBase {
    contentType: string;
    saleRepsDto?: shared.SaleRepsDto;
    statusCode: number;
}
