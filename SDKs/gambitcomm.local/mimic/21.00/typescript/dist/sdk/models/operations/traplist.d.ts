import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrapListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class TrapListRequest extends SpeakeasyBase {
    pathParams: TrapListPathParams;
}
export declare class TrapListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trapList200ApplicationJsonStrings?: string[];
}
