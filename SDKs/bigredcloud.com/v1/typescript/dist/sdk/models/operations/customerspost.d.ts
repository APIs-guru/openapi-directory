import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersPostRequest extends SpeakeasyBase {
    request: shared.CustomerDto;
}
export declare class CustomersPostResponse extends SpeakeasyBase {
    contentType: string;
    customersPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
