import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetNumberStartsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetNumberStartsRequest extends SpeakeasyBase {
    pathParams: GetNumberStartsPathParams;
}
export declare class GetNumberStartsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNumberStarts200ApplicationJsonInt32Integer?: number;
}
