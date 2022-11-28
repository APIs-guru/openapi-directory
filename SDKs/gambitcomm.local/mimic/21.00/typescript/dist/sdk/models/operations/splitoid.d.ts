import { SpeakeasyBase } from "../../../internal/utils";
export declare class SplitOidPathParams extends SpeakeasyBase {
    oid: string;
    agentNum: number;
}
export declare class SplitOidRequest extends SpeakeasyBase {
    pathParams: SplitOidPathParams;
}
export declare class SplitOidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    splitOid200ApplicationJsonStrings?: string[];
}
