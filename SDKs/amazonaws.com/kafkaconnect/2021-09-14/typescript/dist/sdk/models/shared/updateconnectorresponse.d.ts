import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorStateEnum } from "./connectorstateenum";
export declare class UpdateConnectorResponse extends SpeakeasyBase {
    connectorArn?: string;
    connectorState?: ConnectorStateEnum;
}
