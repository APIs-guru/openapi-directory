import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetWriteCommunityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=write" })
  write: string;
}


export class SetWriteCommunityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetWriteCommunityPathParams;
}


export class SetWriteCommunityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setWriteCommunity200ApplicationJsonString?: string;
}
