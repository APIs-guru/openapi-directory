import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectorSummary } from "./connectorsummary";


export class ListConnectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectors", elemType: shared.ConnectorSummary })
  connectors?: ConnectorSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
