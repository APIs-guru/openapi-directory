import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVideosIdCommentThreadsThreadIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=threadId" })
  threadId: number;
}


export class GetVideosIdCommentThreadsThreadIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideosIdCommentThreadsThreadIdPathParams;
}


export class GetVideosIdCommentThreadsThreadIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoCommentThreadTree?: any;
}
