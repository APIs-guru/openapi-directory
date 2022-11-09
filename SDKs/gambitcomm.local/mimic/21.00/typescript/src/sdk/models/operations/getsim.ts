import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSimPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetSimRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSimPathParams;
}


export class GetSimResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSim200ApplicationJsonString?: string;
}
