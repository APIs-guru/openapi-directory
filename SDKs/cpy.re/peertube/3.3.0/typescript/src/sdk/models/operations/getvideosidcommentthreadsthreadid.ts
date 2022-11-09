import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVideosIdCommentThreadsThreadIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=threadId" })
  threadId: number;
}


export class GetVideosIdCommentThreadsThreadIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosIdCommentThreadsThreadIdPathParams;
}


export class GetVideosIdCommentThreadsThreadIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoCommentThreadTree?: any;
}
