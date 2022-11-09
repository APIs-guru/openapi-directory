import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRadAnalystQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=analyst_id" })
  analystId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=analyst_short_id" })
  analystShortId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_assignment_update_date" })
  maxAssignmentUpdateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_assignment_update_date" })
  minAssignmentUpdateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=telephone_ext" })
  telephoneExt?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string[];
}


export class GetRadAnalystRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRadAnalystQueryParams;
}


export class GetRadAnalystResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  radAnalystPage?: shared.RadAnalystPage;

  @Metadata()
  statusCode: number;
}
