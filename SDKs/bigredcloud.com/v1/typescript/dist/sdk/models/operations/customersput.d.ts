import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CustomersPutRequest extends SpeakeasyBase {
    pathParams: CustomersPutPathParams;
    request: shared.CustomerDto;
}
export declare class CustomersPutResponse extends SpeakeasyBase {
    contentType: string;
    customersPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
