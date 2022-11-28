import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CfgNewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstAgentNum" })
  firstAgentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastAgentNum" })
  lastAgentNum: number;
}


export class CfgNewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CfgNewPathParams;
}


export class CfgNewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cfgNew200ApplicationJsonObject?: Map<string, number>;
}
