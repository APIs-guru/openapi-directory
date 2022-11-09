import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetMaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMaskPathParams;
}


export class GetMaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMask200ApplicationJsonString?: string;
}
