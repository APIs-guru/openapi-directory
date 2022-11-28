import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConversionsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class ConversionsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    status?: ConversionsCountStatusEnum;
    textSearch?: string;
}
export declare class ConversionsCountRequest extends SpeakeasyBase {
    queryParams: ConversionsCountQueryParams;
}
export declare class ConversionsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
