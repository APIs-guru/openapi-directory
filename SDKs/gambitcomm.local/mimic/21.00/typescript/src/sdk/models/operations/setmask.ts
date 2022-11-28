import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetMaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;
}


export class SetMaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetMaskPathParams;
}


export class SetMaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setMask200ApplicationJsonString?: string;
}
