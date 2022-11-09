import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHostPathParams;
}


export class GetHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getHost200ApplicationJsonString?: string;
}
