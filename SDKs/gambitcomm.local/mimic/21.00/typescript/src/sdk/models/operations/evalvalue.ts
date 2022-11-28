import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EvalValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class EvalValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EvalValuePathParams;
}


export class EvalValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  evalValue200ApplicationJsonString?: string;
}
