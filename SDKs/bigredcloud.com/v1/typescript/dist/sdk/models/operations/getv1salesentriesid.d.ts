import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1SalesEntriesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1SalesEntriesIdRequest extends SpeakeasyBase {
    pathParams: GetV1SalesEntriesIdPathParams;
}
export declare class GetV1SalesEntriesIdResponse extends SpeakeasyBase {
    contentType: string;
    salesEntryDto?: shared.SalesEntryDto;
    statusCode: number;
}
