import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDropsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetDropsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDropsPathParams;
}


export class GetDropsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDrops200ApplicationJsonInt32Integer?: number;
}
