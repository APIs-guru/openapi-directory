import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SetMibsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class SetMibsRequest extends SpeakeasyBase {
    pathParams: SetMibsPathParams;
    request: shared.Triplet[];
}
export declare class SetMibsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setMibs200ApplicationJsonString?: string;
}
