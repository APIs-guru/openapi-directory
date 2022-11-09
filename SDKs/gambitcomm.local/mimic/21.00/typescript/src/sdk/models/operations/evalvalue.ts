import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EvalValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class EvalValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EvalValuePathParams;
}


export class EvalValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  evalValue200ApplicationJsonString?: string;
}
