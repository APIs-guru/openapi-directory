import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CfgLoadPathParams extends SpeakeasyBase {
    cfgFile: string;
    firstAgentNum: number;
    lastAgentNum: number;
    startAgentNum: number;
}
export declare class CfgLoadRequest extends SpeakeasyBase {
    pathParams: CfgLoadPathParams;
}
export declare class CfgLoadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cfgLoad200ApplicationJsonObject?: Map<string, number>;
}
