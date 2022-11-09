import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListVersionsAvailabilityEnum {
    Available = "available"
}

export enum ListVersionsEmbargoedEnum {
    Include = "include"
,    Exclude = "exclude"
,    Only = "only"
}

export enum ListVersionsPaymentTypeEnum {
    Free = "free"
,    Bbcstore = "bbcstore"
,    Uscansvod = "uscansvod"
}


export class ListVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability?: ListVersionsAvailabilityEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListVersionsEmbargoedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=media_set" })
  mediaSet?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=payment_type" })
  paymentType?: ListVersionsPaymentTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];
}


export class ListVersionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListVersionsQueryParams;
}


export class ListVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
