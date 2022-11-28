import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMibsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetMibsRequest extends SpeakeasyBase {
    pathParams: GetMibsPathParams;
}
export declare class GetMibsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    triplets?: shared.Triplet[];
}
