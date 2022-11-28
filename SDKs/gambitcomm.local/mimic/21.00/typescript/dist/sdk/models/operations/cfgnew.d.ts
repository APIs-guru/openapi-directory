import { SpeakeasyBase } from "../../../internal/utils";
export declare class CfgNewPathParams extends SpeakeasyBase {
    firstAgentNum: number;
    lastAgentNum: number;
}
export declare class CfgNewRequest extends SpeakeasyBase {
    pathParams: CfgNewPathParams;
}
export declare class CfgNewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cfgNew200ApplicationJsonObject?: Map<string, number>;
}
