import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetMaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mask" })
  mask: string;
}


export class SetMaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetMaskPathParams;
}


export class SetMaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setMask200ApplicationJsonString?: string;
}
