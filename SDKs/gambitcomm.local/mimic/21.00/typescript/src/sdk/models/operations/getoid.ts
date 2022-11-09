import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetOidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOidPathParams;
}


export class GetOidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOid200ApplicationJsonString?: string;
}
