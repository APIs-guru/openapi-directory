import { SpeakeasyBase } from "../../../internal/utils";
export declare class MsetValuePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class MsetValueRequest extends SpeakeasyBase {
    pathParams: MsetValuePathParams;
    request?: string[][];
}
export declare class MsetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    msetValue200ApplicationJsonString?: string;
}
