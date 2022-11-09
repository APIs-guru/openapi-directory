import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetObjectsPathParams extends SpeakeasyBase {
    oid: string;
    agentNum: number;
}
export declare class GetObjectsRequest extends SpeakeasyBase {
    pathParams: GetObjectsPathParams;
}
export declare class GetObjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getObjects200ApplicationJsonStrings?: string[];
}
