import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChangedStateListResponse extends SpeakeasyBase {
    agentStates?: shared.AgentState[];
    contentType: string;
    statusCode: number;
}
