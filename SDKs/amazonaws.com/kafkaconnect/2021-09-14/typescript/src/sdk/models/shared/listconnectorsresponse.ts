import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorSummary } from "./connectorsummary";



export class ListConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectors", elemType: ConnectorSummary })
  connectors?: ConnectorSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
