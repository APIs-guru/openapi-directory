import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorStateEnum } from "./connectorstateenum";


export class UpdateConnectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorArn" })
  connectorArn?: string;

  @Metadata({ data: "json, name=connectorState" })
  connectorState?: ConnectorStateEnum;
}
