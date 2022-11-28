import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetDropsPathParams extends SpeakeasyBase {
    agentNum: number;
    drops: number;
}
export declare class SetDropsRequest extends SpeakeasyBase {
    pathParams: SetDropsPathParams;
}
export declare class SetDropsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setDrops200ApplicationJsonInt32Integer?: number;
}
