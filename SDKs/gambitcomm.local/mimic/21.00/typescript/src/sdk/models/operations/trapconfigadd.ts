import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrapConfigAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class TrapConfigAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TrapConfigAddPathParams;
}


export class TrapConfigAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trapConfigAdd200ApplicationJsonString?: string;
}
