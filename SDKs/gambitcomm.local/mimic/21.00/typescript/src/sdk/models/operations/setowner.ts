import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetOwnerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;
}


export class SetOwnerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetOwnerPathParams;
}


export class SetOwnerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setOwner200ApplicationJsonString?: string;
}
