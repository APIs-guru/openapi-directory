import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connector } from "./connector";


export class GetConnectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorList", elemType: shared.Connector })
  connectorList?: Connector[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
