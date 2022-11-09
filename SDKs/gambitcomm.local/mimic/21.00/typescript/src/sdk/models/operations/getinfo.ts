import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInfoPathParams;
}


export class GetInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInfo200ApplicationJsonString?: string;
}
