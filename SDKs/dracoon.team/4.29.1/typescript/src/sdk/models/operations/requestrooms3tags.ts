import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRoomS3TagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomS3TagsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoomS3TagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRoomS3TagsPathParams;

  @SpeakeasyMetadata()
  headers: RequestRoomS3TagsHeaders;
}


export class RequestRoomS3TagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3TagList?: shared.S3TagList;

  @SpeakeasyMetadata()
  statusCode: number;
}
