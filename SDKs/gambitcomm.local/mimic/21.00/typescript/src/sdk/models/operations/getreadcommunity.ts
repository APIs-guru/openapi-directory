import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReadCommunityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetReadCommunityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReadCommunityPathParams;
}


export class GetReadCommunityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getReadCommunity200ApplicationJsonString?: string;
}
