import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CfgLoadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cfgFile" })
  cfgFile: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstAgentNum" })
  firstAgentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastAgentNum" })
  lastAgentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startAgentNum" })
  startAgentNum: number;
}


export class CfgLoadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CfgLoadPathParams;
}


export class CfgLoadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cfgLoad200ApplicationJsonObject?: Map<string, number>;
}
