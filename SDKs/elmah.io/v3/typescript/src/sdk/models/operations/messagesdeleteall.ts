import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MessagesDeleteAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesDeleteAllRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  search?: shared.Search;

  @Metadata({ data: "request, media_type=application/json" })
  search1?: shared.Search;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  search2?: shared.Search;

  @Metadata({ data: "request, media_type=text/json" })
  search3?: shared.Search;
}


export class MessagesDeleteAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesDeleteAllPathParams;

  @Metadata()
  request?: MessagesDeleteAllRequests;
}


export class MessagesDeleteAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
