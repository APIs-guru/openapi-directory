import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SavePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class SaveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SavePathParams;
}


export class SaveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  save200ApplicationJsonString?: string;
}
