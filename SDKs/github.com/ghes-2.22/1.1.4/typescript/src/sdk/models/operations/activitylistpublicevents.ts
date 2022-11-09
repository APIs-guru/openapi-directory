import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListPublicEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListPublicEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ActivityListPublicEventsQueryParams;
}


export class ActivityListPublicEvents503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ActivityListPublicEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  activityListPublicEvents503ApplicationJsonObject?: ActivityListPublicEvents503ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];
}
