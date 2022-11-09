import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInformTimeoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetInformTimeoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInformTimeoutPathParams;
}


export class GetInformTimeoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInformTimeout200ApplicationJsonInt32Integer?: number;
}
