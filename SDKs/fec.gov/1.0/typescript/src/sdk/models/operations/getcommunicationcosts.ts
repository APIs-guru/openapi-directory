import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCommunicationCostsSupportOpposeIndicatorEnum {
    S = "S"
,    O = "O"
}


export class GetCommunicationCostsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" })
  supportOpposeIndicator?: GetCommunicationCostsSupportOpposeIndicatorEnum[];
}


export class GetCommunicationCostsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommunicationCostsQueryParams;
}


export class GetCommunicationCostsResponse extends SpeakeasyBase {
  @Metadata()
  communicationCostPage?: shared.CommunicationCostPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
