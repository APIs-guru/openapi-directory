import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ReloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReloadPathParams;
}


export class ReloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reload200ApplicationJsonString?: string;
}
