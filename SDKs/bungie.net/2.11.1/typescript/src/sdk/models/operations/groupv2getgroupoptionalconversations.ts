import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GetGroupOptionalConversationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetGroupOptionalConversationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetGroupOptionalConversationsPathParams;
}


export class GroupV2GetGroupOptionalConversationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
