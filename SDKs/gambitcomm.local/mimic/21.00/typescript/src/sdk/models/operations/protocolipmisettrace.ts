import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolIpmiSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolIpmiSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiSetTracePathParams;
}


export class ProtocolIpmiSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolIpmiSetTrace200ApplicationJsonString?: string;
}
