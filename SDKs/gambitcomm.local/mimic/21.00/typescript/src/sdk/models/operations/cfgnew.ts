import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CfgNewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstAgentNum" })
  firstAgentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastAgentNum" })
  lastAgentNum: number;
}


export class CfgNewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CfgNewPathParams;
}


export class CfgNewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cfgNew200ApplicationJsonObject?: Map<string, number>;
}
