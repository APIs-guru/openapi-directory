import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorResource } from "./connectorresource";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetConnectorResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ConnectorResource;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
