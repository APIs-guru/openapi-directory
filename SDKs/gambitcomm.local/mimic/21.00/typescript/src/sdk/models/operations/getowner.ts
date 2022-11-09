import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOwnerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetOwnerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOwnerPathParams;
}


export class GetOwnerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOwner200ApplicationJsonString?: string;
}
