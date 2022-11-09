import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetDropsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=drops" })
  drops: number;
}


export class SetDropsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetDropsPathParams;
}


export class SetDropsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setDrops200ApplicationJsonInt32Integer?: number;
}
