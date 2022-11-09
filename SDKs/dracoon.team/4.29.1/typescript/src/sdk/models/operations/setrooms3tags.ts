import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetRoomS3TagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class SetRoomS3TagsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetRoomS3TagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetRoomS3TagsPathParams;

  @Metadata()
  headers: SetRoomS3TagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.S3TagIds;
}


export class SetRoomS3TagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3TagList?: shared.S3TagList;

  @Metadata()
  statusCode: number;
}
