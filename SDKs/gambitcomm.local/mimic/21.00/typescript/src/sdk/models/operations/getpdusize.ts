import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPdusizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetPdusizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPdusizePathParams;
}


export class GetPdusizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPdusize200ApplicationJsonInt32Integer?: number;
}
