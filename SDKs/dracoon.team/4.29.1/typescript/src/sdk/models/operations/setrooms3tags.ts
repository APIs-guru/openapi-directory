import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetRoomS3TagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class SetRoomS3TagsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetRoomS3TagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetRoomS3TagsPathParams;

  @SpeakeasyMetadata()
  headers: SetRoomS3TagsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.S3TagIds;
}


export class SetRoomS3TagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3TagList?: shared.S3TagList;

  @SpeakeasyMetadata()
  statusCode: number;
}
