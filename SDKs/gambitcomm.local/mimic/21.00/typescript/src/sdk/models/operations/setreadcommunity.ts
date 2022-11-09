import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetReadCommunityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=read" })
  read: string;
}


export class SetReadCommunityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetReadCommunityPathParams;
}


export class SetReadCommunityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setReadCommunity200ApplicationJsonString?: string;
}
