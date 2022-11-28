import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HaltPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class HaltRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HaltPathParams;
}


export class HaltResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  halt200ApplicationJsonString?: string;
}
