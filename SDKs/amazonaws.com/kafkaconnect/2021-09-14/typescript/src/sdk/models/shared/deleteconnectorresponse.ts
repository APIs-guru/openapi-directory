import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorStateEnum } from "./connectorstateenum";



export class DeleteConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorArn" })
  connectorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorState" })
  connectorState?: ConnectorStateEnum;
}
