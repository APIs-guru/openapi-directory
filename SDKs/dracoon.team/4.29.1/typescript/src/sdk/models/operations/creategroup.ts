import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateGroupRequest;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
