import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesPathParams extends SpeakeasyBase {
    agentNum: number;
    object: string;
}
export declare class GetInstancesRequest extends SpeakeasyBase {
    pathParams: GetInstancesPathParams;
}
export declare class GetInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInstances200ApplicationJsonStrings?: string[];
}
