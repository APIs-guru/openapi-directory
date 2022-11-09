import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDropsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetDropsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDropsPathParams;
}


export class GetDropsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDrops200ApplicationJsonInt32Integer?: number;
}
