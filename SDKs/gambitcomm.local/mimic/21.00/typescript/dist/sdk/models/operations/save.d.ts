import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SavePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class SaveRequest extends SpeakeasyBase {
    pathParams: SavePathParams;
}
export declare class SaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    save200ApplicationJsonString?: string;
}
