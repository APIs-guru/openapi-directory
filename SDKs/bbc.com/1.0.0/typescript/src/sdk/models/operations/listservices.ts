import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListServicesServiceTypeEnum {
    Interactive = "Interactive",
    LocalRadio = "Local Radio",
    MasterBrandOnly = "Master Brand Only",
    NationalRadio = "National Radio",
    OnDemand = "On Demand",
    RegionalRadio = "Regional Radio",
    Simulcast = "Simulcast",
    Tv = "TV",
    WebOnly = "Web Only",
    Webcast = "Webcast"
}


export class ListServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_from" })
  endFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_to" })
  endTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mid" })
  mid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_type" })
  serviceType?: ListServicesServiceTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sid" })
  sid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_from" })
  startFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_to" })
  startTo?: Date;
}


export class ListServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListServicesQueryParams;
}


export class ListServicesResponse extends SpeakeasyBase {
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
