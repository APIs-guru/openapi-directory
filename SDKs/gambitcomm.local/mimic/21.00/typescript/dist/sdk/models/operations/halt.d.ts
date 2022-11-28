import { SpeakeasyBase } from "../../../internal/utils";
export declare class HaltPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class HaltRequest extends SpeakeasyBase {
    pathParams: HaltPathParams;
}
export declare class HaltResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    halt200ApplicationJsonString?: string;
}
