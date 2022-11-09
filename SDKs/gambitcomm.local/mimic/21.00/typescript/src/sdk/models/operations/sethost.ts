import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=host" })
  host: string;
}


export class SetHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetHostPathParams;
}


export class SetHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setHost200ApplicationJsonString?: string;
}
