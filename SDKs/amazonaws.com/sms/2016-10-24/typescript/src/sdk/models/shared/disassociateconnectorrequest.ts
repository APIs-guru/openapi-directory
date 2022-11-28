import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorId" })
  connectorId: string;
}
