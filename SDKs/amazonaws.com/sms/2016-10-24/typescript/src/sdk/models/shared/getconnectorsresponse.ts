import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";



export class GetConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorList", elemType: Connector })
  connectorList?: Connector[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
