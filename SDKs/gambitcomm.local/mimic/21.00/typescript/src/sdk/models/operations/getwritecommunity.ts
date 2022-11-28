import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWriteCommunityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetWriteCommunityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWriteCommunityPathParams;
}


export class GetWriteCommunityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getWriteCommunity200ApplicationJsonString?: string;
}
