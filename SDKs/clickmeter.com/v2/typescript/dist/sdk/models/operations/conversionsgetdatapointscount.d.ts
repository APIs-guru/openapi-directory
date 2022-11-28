import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsGetDatapointsCountPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare class ConversionsGetDatapointsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    status?: string;
    tags?: string;
    textSearch?: string;
    type?: string;
}
export declare class ConversionsGetDatapointsCountRequest extends SpeakeasyBase {
    pathParams: ConversionsGetDatapointsCountPathParams;
    queryParams: ConversionsGetDatapointsCountQueryParams;
}
export declare class ConversionsGetDatapointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
