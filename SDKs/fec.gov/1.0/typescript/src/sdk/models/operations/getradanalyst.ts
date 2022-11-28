import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRadAnalystQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analyst_id" })
  analystId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=analyst_short_id" })
  analystShortId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_assignment_update_date" })
  maxAssignmentUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_assignment_update_date" })
  minAssignmentUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=telephone_ext" })
  telephoneExt?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string[];
}


export class GetRadAnalystRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRadAnalystQueryParams;
}


export class GetRadAnalystResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  radAnalystPage?: shared.RadAnalystPage;

  @SpeakeasyMetadata()
  statusCode: number;
}
