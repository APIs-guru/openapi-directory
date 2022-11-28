import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetOiddirPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=oiddir" })
  oiddir: string;
}


export class SetOiddirRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetOiddirPathParams;
}


export class SetOiddirResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setOiddir200ApplicationJsonString?: string;
}
