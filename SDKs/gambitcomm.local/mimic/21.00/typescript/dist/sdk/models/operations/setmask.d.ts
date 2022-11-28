import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetMaskPathParams extends SpeakeasyBase {
    agentNum: number;
    mask: string;
}
export declare class SetMaskRequest extends SpeakeasyBase {
    pathParams: SetMaskPathParams;
}
export declare class SetMaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setMask200ApplicationJsonString?: string;
}
