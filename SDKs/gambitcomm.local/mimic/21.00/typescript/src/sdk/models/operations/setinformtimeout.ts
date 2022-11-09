import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetInformTimeoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=inform_timeout" })
  informTimeout: number;
}


export class SetInformTimeoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetInformTimeoutPathParams;
}


export class SetInformTimeoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setInformTimeout200ApplicationJsonInt32Integer?: number;
}
