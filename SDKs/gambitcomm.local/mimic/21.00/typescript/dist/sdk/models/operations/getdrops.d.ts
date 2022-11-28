import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDropsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetDropsRequest extends SpeakeasyBase {
    pathParams: GetDropsPathParams;
}
export declare class GetDropsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDrops200ApplicationJsonInt32Integer?: number;
}
