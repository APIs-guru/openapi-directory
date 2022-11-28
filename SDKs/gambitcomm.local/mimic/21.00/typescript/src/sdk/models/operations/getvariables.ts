import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVariablesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetVariablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVariablesPathParams;
}


export class GetVariablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVariables200ApplicationJsonStrings?: string[];
}
