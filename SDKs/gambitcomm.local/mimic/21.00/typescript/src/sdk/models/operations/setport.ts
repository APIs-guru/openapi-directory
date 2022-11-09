import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetPortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class SetPortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetPortPathParams;
}


export class SetPortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setPort200ApplicationJsonString?: string;
}
