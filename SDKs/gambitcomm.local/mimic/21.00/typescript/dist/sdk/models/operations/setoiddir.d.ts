import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetOiddirPathParams extends SpeakeasyBase {
    agentNum: number;
    oiddir: string;
}
export declare class SetOiddirRequest extends SpeakeasyBase {
    pathParams: SetOiddirPathParams;
}
export declare class SetOiddirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setOiddir200ApplicationJsonString?: string;
}
