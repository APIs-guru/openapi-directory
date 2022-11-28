import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBatchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBatchRequest extends SpeakeasyBase {
    pathParams: GetBatchPathParams;
}
export declare class GetBatchResponse extends SpeakeasyBase {
    batch?: any;
    contentType: string;
    statusCode: number;
}
