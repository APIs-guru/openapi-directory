import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPdusizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetPdusizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPdusizePathParams;
}


export class GetPdusizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPdusize200ApplicationJsonInt32Integer?: number;
}
