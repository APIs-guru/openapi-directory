import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProtocolsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetProtocolsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProtocolsPathParams;
}


export class GetProtocolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProtocols200ApplicationJsonStrings?: string[];
}
