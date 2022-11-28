import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MonthlyActiveUsersForLast30DaysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class MonthlyActiveUsersForLast30DaysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MonthlyActiveUsersForLast30DaysQueryParams;
}


export class MonthlyActiveUsersForLast30DaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
