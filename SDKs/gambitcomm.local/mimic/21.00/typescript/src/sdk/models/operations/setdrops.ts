import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetDropsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=drops" })
  drops: number;
}


export class SetDropsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetDropsPathParams;
}


export class SetDropsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setDrops200ApplicationJsonInt32Integer?: number;
}
