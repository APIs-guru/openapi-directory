import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetScenPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetScenRequest extends SpeakeasyBase {
    pathParams: GetScenPathParams;
}
export declare class GetScenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getScen200ApplicationJsonInt32Integer?: number;
}
