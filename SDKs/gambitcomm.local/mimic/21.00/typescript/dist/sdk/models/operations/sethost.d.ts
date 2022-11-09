import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SetHostPathParams extends SpeakeasyBase {
    agentNum: number;
    host: string;
}
export declare class SetHostRequest extends SpeakeasyBase {
    pathParams: SetHostPathParams;
}
export declare class SetHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setHost200ApplicationJsonString?: string;
}
