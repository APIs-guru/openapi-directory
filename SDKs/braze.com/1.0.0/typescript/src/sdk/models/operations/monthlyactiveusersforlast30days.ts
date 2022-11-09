import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MonthlyActiveUsersForLast30DaysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class MonthlyActiveUsersForLast30DaysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MonthlyActiveUsersForLast30DaysQueryParams;
}


export class MonthlyActiveUsersForLast30DaysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
