import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetTopicForContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: number;
}


export class ForumGetTopicForContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetTopicForContentPathParams;
}


export class ForumGetTopicForContentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
