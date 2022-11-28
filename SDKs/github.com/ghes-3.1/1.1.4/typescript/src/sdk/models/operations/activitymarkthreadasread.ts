import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityMarkThreadAsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
  threadId: number;
}


export class ActivityMarkThreadAsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityMarkThreadAsReadPathParams;
}


export class ActivityMarkThreadAsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
