import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProtocolsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetProtocolsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProtocolsPathParams;
}


export class GetProtocolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProtocols200ApplicationJsonStrings?: string[];
}
