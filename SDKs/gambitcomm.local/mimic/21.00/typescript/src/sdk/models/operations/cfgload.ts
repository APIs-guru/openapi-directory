import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CfgLoadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cfgFile" })
  cfgFile: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstAgentNum" })
  firstAgentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastAgentNum" })
  lastAgentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startAgentNum" })
  startAgentNum: number;
}


export class CfgLoadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CfgLoadPathParams;
}


export class CfgLoadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cfgLoad200ApplicationJsonObject?: Map<string, number>;
}
