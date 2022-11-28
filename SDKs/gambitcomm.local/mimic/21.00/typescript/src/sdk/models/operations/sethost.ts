import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=host" })
  host: string;
}


export class SetHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetHostPathParams;
}


export class SetHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setHost200ApplicationJsonString?: string;
}
