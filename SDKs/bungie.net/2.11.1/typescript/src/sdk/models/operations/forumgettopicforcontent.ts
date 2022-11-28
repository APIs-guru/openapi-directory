import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetTopicForContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: number;
}


export class ForumGetTopicForContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetTopicForContentPathParams;
}


export class ForumGetTopicForContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
