import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrapConfigListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class TrapConfigListRequest extends SpeakeasyBase {
    pathParams: TrapConfigListPathParams;
}
export declare class TrapConfigListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trapDests?: shared.TrapDest[];
}
