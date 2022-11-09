import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorResource } from "./connectorresource";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetConnectorResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: ConnectorResource;

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
