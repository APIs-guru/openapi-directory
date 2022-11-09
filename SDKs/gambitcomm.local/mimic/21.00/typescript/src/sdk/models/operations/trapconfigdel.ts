import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrapConfigDelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IP" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class TrapConfigDelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TrapConfigDelPathParams;
}


export class TrapConfigDelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trapConfigDel200ApplicationJsonString?: string;
}
