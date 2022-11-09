import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolIpmiSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolIpmiSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiSetConfigPathParams;
}


export class ProtocolIpmiSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolIpmiSetConfig200ApplicationJsonString?: string;
}
