import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityGetThreadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
  threadId: number;
}


export class ActivityGetThreadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityGetThreadPathParams;
}


export class ActivityGetThreadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  thread?: shared.Thread;
}
