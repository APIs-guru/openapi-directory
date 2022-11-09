import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolCoapGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolCoapGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolCoapGetArgsPathParams;
}


export class ProtocolCoapGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolCoapGetArgs200ApplicationJsonObject?: Map<string, any>;
}
