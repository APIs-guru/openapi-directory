import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPdusizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pdusize" })
  pdusize: number;
}


export class SetPdusizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetPdusizePathParams;
}


export class SetPdusizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setPdusize200ApplicationJsonInt32Integer?: number;
}
