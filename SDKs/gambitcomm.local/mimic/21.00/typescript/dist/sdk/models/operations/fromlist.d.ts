import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FromListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class FromListRequest extends SpeakeasyBase {
    pathParams: FromListPathParams;
}
export declare class FromListResponse extends SpeakeasyBase {
    contentType: string;
    ipSources?: shared.IpSource[];
    statusCode: number;
}
