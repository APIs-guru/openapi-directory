import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddGroupMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class AddGroupMembersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class AddGroupMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddGroupMembersPathParams;

  @Metadata()
  headers: AddGroupMembersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChangeGroupMembersRequest;
}


export class AddGroupMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
