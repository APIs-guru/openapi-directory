import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetPollPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: number;
}


export class ForumGetPollRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetPollPathParams;
}


export class ForumGetPollResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
