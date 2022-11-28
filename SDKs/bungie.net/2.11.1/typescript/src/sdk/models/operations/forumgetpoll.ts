import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetPollPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: number;
}


export class ForumGetPollRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetPollPathParams;
}


export class ForumGetPollResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
