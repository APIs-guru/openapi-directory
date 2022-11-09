import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetPortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPortPathParams;
}


export class GetPortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPort200ApplicationJsonString?: string;
}
