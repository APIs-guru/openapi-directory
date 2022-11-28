import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListVersionsAvailabilityEnum {
    Available = "available"
}

export enum ListVersionsEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}

export enum ListVersionsPaymentTypeEnum {
    Free = "free",
    Bbcstore = "bbcstore",
    Uscansvod = "uscansvod"
}


export class ListVersionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability?: ListVersionsAvailabilityEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListVersionsEmbargoedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=media_set" })
  mediaSet?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_type" })
  paymentType?: ListVersionsPaymentTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];
}


export class ListVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListVersionsQueryParams;
}


export class ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
