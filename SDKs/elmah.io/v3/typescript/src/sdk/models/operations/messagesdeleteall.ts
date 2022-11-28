import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesDeleteAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesDeleteAllRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  search?: shared.Search;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  search1?: shared.Search;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  search2?: shared.Search;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  search3?: shared.Search;
}


export class MessagesDeleteAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesDeleteAllPathParams;

  @SpeakeasyMetadata()
  request?: MessagesDeleteAllRequests;
}


export class MessagesDeleteAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
