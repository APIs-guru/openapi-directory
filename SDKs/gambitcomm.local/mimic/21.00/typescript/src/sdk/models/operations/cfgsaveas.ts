import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CfgSaveasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cfgFile" })
  cfgFile: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstAgentNum" })
  firstAgentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastAgentNum" })
  lastAgentNum: number;
}


export class CfgSaveasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CfgSaveasPathParams;
}


export class CfgSaveasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cfgSaveas200ApplicationJsonObject?: Map<string, number>;
}
