import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionSummary } from "./environmentaccountconnectionsummary";
export declare class ListEnvironmentAccountConnectionsOutput extends SpeakeasyBase {
    environmentAccountConnections: EnvironmentAccountConnectionSummary[];
    nextToken?: string;
}
