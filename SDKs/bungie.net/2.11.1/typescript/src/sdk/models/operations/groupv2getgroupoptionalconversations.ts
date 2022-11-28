import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupV2GetGroupOptionalConversationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetGroupOptionalConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetGroupOptionalConversationsPathParams;
}


export class GroupV2GetGroupOptionalConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
