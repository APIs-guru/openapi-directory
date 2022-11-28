import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1CustomersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1CustomersIdQueryParams extends SpeakeasyBase {
    needBalance?: boolean;
}
export declare class GetV1CustomersIdRequest extends SpeakeasyBase {
    pathParams: GetV1CustomersIdPathParams;
    queryParams: GetV1CustomersIdQueryParams;
}
export declare class GetV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    customerDto?: shared.CustomerDto;
    statusCode: number;
}
