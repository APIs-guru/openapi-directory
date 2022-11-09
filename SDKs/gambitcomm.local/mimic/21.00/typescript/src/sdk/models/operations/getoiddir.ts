import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOiddirPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetOiddirRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOiddirPathParams;
}


export class GetOiddirResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOiddir200ApplicationJsonString?: string;
}
