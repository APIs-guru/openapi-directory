import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NewPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
}
export declare class NewRequest extends SpeakeasyBase {
    pathParams: NewPathParams;
    request: shared.Triplet[];
}
export declare class NewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    new200ApplicationJsonString?: string;
}
