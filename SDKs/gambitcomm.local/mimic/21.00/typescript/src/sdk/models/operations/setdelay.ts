import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class SetDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetDelayPathParams;
}


export class SetDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setDelay200ApplicationJsonInt32Integer?: number;
}
