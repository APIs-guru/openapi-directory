import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppGetApplicationApiUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: number;
}


export class AppGetApplicationApiUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class AppGetApplicationApiUsageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AppGetApplicationApiUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppGetApplicationApiUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: AppGetApplicationApiUsageQueryParams;

  @SpeakeasyMetadata()
  security: AppGetApplicationApiUsageSecurity;
}


export class AppGetApplicationApiUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
