import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorStateEnum } from "./connectorstateenum";
export declare class CreateConnectorResponse extends SpeakeasyBase {
    connectorArn?: string;
    connectorName?: string;
    connectorState?: ConnectorStateEnum;
}
