import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesEntriesPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesEntriesPutRequest extends SpeakeasyBase {
    pathParams: SalesEntriesPutPathParams;
    request: shared.SalesEntryDto;
}
export declare class SalesEntriesPutResponse extends SpeakeasyBase {
    contentType: string;
    salesEntriesPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
