import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetWriteCommunityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=write" })
  write: string;
}


export class SetWriteCommunityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetWriteCommunityPathParams;
}


export class SetWriteCommunityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setWriteCommunity200ApplicationJsonString?: string;
}
