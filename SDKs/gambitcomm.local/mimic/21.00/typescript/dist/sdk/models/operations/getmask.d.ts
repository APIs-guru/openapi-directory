import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetMaskPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetMaskRequest extends SpeakeasyBase {
    pathParams: GetMaskPathParams;
}
export declare class GetMaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMask200ApplicationJsonString?: string;
}
