import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommitteeCommitteeIdFilingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;
}

export enum GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum {
    Unknown = ""
,    N = "N"
,    A = "A"
,    T = "T"
,    C = "C"
,    M = "M"
,    S = "S"
}

export enum GetCommitteeCommitteeIdFilingsFilerTypeEnum {
    EFile = "e-file"
,    Paper = "paper"
}

export enum GetCommitteeCommitteeIdFilingsOfficeEnum {
    Unknown = ""
,    H = "H"
,    S = "S"
,    P = "P"
}


export class GetCommitteeCommitteeIdFilingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" })
  amendmentIndicator?: GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" })
  beginningImageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=document_type" })
  documentType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=file_number" })
  fileNumber?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filer_type" })
  filerType?: GetCommitteeCommitteeIdFilingsFilerTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=form_category" })
  formCategory?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=form_type" })
  formType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_amended" })
  isAmended?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" })
  maxReceiptDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" })
  minReceiptDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCommitteeCommitteeIdFilingsOfficeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=party" })
  party?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=primary_general_indicator" })
  primaryGeneralIndicator?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=report_type" })
  reportType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=report_year" })
  reportYear?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=request_type" })
  requestType?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];
}


export class GetCommitteeCommitteeIdFilingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommitteeCommitteeIdFilingsPathParams;

  @Metadata()
  queryParams: GetCommitteeCommitteeIdFilingsQueryParams;
}


export class GetCommitteeCommitteeIdFilingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  filingsPage?: shared.FilingsPage;

  @Metadata()
  statusCode: number;
}
