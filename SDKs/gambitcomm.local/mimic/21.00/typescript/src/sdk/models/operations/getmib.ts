import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMibPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetMibRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMibPathParams;
}


export class GetMibResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMib200ApplicationJsonString?: string;
}
