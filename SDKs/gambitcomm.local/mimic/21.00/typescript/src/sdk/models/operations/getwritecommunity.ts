import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWriteCommunityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetWriteCommunityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWriteCommunityPathParams;
}


export class GetWriteCommunityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWriteCommunity200ApplicationJsonString?: string;
}
