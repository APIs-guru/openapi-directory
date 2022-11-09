import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CfgSaveasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cfgFile" })
  cfgFile: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstAgentNum" })
  firstAgentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastAgentNum" })
  lastAgentNum: number;
}


export class CfgSaveasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CfgSaveasPathParams;
}


export class CfgSaveasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cfgSaveas200ApplicationJsonObject?: Map<string, number>;
}
