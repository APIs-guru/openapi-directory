import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemsBatchInternalTrasnferPathParams extends SpeakeasyBase {
    batchUuid: string;
}
export declare class GetItemsBatchInternalTrasnferQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetItemsBatchInternalTrasnferRequest extends SpeakeasyBase {
    pathParams: GetItemsBatchInternalTrasnferPathParams;
    queryParams: GetItemsBatchInternalTrasnferQueryParams;
}
export declare class GetItemsBatchInternalTrasnferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onebatchesGetResponses200ContentApplication1jsonSchema?: shared.OnebatchesGetResponses200ContentApplication1jsonSchema;
}
