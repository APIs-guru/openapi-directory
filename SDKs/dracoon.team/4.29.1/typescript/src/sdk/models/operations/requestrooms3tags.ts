import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRoomS3TagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomS3TagsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoomS3TagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestRoomS3TagsPathParams;

  @Metadata()
  headers: RequestRoomS3TagsHeaders;
}


export class RequestRoomS3TagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3TagList?: shared.S3TagList;

  @Metadata()
  statusCode: number;
}
