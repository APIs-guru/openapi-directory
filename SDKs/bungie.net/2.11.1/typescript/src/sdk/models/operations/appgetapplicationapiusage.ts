import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppGetApplicationApiUsagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: number;
}


export class AppGetApplicationApiUsageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class AppGetApplicationApiUsageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AppGetApplicationApiUsageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppGetApplicationApiUsagePathParams;

  @Metadata()
  queryParams: AppGetApplicationApiUsageQueryParams;

  @Metadata()
  security: AppGetApplicationApiUsageSecurity;
}


export class AppGetApplicationApiUsageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
