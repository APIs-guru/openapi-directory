import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolIpmiGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolIpmiGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiGetArgsPathParams;
}


export class ProtocolIpmiGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolIpmiGetArgs200ApplicationJsonObject?: Map<string, any>;
}
