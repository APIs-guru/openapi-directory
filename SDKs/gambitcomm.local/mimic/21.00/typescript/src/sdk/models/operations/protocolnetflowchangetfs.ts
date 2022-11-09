import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowChangeTfsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;
}


export class ProtocolNetflowChangeTfsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowChangeTfsPathParams;
}


export class ProtocolNetflowChangeTfsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowChangeTfs200ApplicationJsonString?: string;
}
