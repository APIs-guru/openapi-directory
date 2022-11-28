import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetReadCommunityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=read" })
  read: string;
}


export class SetReadCommunityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetReadCommunityPathParams;
}


export class SetReadCommunityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setReadCommunity200ApplicationJsonString?: string;
}
