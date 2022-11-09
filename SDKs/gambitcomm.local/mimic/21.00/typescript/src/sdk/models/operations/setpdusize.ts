import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetPdusizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pdusize" })
  pdusize: number;
}


export class SetPdusizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetPdusizePathParams;
}


export class SetPdusizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setPdusize200ApplicationJsonInt32Integer?: number;
}
