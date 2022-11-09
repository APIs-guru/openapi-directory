import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HaltPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class HaltRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HaltPathParams;
}


export class HaltResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  halt200ApplicationJsonString?: string;
}
