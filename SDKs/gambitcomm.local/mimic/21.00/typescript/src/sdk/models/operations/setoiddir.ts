import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetOiddirPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=oiddir" })
  oiddir: string;
}


export class SetOiddirRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetOiddirPathParams;
}


export class SetOiddirResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setOiddir200ApplicationJsonString?: string;
}
