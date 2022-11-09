import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAuditCategoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=primary_category_id" })
  primaryCategoryId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=primary_category_name" })
  primaryCategoryName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetAuditCategoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAuditCategoryQueryParams;
}


export class GetAuditCategoryResponse extends SpeakeasyBase {
  @Metadata()
  auditCategoryPage?: shared.AuditCategoryPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
