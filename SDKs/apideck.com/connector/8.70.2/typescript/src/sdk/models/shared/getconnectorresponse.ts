import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Connector } from "./connector";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetConnectorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Connector;

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
