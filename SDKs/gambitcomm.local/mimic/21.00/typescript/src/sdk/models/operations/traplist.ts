import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrapListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class TrapListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TrapListPathParams;
}


export class TrapListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trapList200ApplicationJsonStrings?: string[];
}
