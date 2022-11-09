import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScheduleTemplatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=feed_type" })
  feedType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetScheduleTemplatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetScheduleTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetScheduleTemplatesQueryParams;

  @Metadata()
  security: GetScheduleTemplatesSecurity;
}


export class GetScheduleTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleTemplateCollection?: shared.ScheduleTemplateCollection;

  @Metadata()
  statusCode: number;
}
