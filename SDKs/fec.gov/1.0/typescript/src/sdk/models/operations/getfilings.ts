import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFilingsAmendmentIndicatorEnum {
    Unknown = "",
    N = "N",
    A = "A",
    T = "T",
    C = "C",
    M = "M",
    S = "S"
}

export enum GetFilingsFilerTypeEnum {
    EFile = "e-file",
    Paper = "paper"
}

export enum GetFilingsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}


export class GetFilingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amendment_indicator" })
  amendmentIndicator?: GetFilingsAmendmentIndicatorEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beginning_image_number" })
  beginningImageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=document_type" })
  documentType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_number" })
  fileNumber?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filer_type" })
  filerType?: GetFilingsFilerTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_category" })
  formCategory?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_type" })
  formType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_amended" })
  isAmended?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_receipt_date" })
  maxReceiptDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_receipt_date" })
  minReceiptDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetFilingsOfficeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" })
  party?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=primary_general_indicator" })
  primaryGeneralIndicator?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" })
  reportType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_year" })
  reportYear?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_type" })
  requestType?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];
}


export class GetFilingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFilingsQueryParams;
}


export class GetFilingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  filingsPage?: shared.FilingsPage;

  @SpeakeasyMetadata()
  statusCode: number;
}
