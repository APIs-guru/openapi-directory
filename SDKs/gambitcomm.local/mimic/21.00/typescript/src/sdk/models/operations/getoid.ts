import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetOidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOidPathParams;
}


export class GetOidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOid200ApplicationJsonString?: string;
}
