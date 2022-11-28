import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScheduleTemplatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_type" })
  feedType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetScheduleTemplatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetScheduleTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetScheduleTemplatesQueryParams;

  @SpeakeasyMetadata()
  security: GetScheduleTemplatesSecurity;
}


export class GetScheduleTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleTemplateCollection?: shared.ScheduleTemplateCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
