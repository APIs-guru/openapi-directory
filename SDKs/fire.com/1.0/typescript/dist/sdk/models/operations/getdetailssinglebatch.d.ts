import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDetailsSingleBatchPathParams extends SpeakeasyBase {
    batchUuid: string;
}
export declare class GetDetailsSingleBatchRequest extends SpeakeasyBase {
    pathParams: GetDetailsSingleBatchPathParams;
}
export declare class GetDetailsSingleBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems?: shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems;
}
