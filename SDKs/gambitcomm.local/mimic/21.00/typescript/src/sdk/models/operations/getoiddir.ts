import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOiddirPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetOiddirRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOiddirPathParams;
}


export class GetOiddirResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOiddir200ApplicationJsonString?: string;
}
