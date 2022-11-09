import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetProtocolsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SetProtocolsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetProtocolsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class SetProtocolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setProtocols200ApplicationJsonStringIntegers?: number[];
}
