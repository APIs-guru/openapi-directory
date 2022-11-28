import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemsBatchBankTransferPathParams extends SpeakeasyBase {
    batchUuid: string;
}
export declare class GetItemsBatchBankTransferQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetItemsBatchBankTransferRequest extends SpeakeasyBase {
    pathParams: GetItemsBatchBankTransferPathParams;
    queryParams: GetItemsBatchBankTransferQueryParams;
}
export declare class GetItemsBatchBankTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onebatchesGetResponses200ContentApplication1jsonSchema?: shared.OnebatchesGetResponses200ContentApplication1jsonSchema;
}
