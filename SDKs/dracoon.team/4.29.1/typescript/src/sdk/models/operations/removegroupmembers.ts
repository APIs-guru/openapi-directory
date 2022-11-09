import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveGroupMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class RemoveGroupMembersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RemoveGroupMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveGroupMembersPathParams;

  @Metadata()
  headers: RemoveGroupMembersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChangeGroupMembersRequest;
}


export class RemoveGroupMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
