import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReadCommunityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetReadCommunityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReadCommunityPathParams;
}


export class GetReadCommunityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getReadCommunity200ApplicationJsonString?: string;
}
