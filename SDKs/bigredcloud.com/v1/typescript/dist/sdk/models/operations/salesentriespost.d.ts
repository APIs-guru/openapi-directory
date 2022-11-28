import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesEntriesPostRequest extends SpeakeasyBase {
    request: shared.SalesEntryDto;
}
export declare class SalesEntriesPostResponse extends SpeakeasyBase {
    contentType: string;
    salesEntriesPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
