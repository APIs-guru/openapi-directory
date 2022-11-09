import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolTelnetServerGetUsersPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetServerGetUsersRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetServerGetUsersPathParams;
}
export declare class ProtocolTelnetServerGetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    telnetUsers?: shared.TelnetUser[];
}
