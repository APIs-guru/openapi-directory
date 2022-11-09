import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CfgSaveasPathParams extends SpeakeasyBase {
    cfgFile: string;
    firstAgentNum: number;
    lastAgentNum: number;
}
export declare class CfgSaveasRequest extends SpeakeasyBase {
    pathParams: CfgSaveasPathParams;
}
export declare class CfgSaveasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cfgSaveas200ApplicationJsonObject?: Map<string, number>;
}
