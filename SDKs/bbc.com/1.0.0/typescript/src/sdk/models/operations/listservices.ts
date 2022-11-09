import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListServicesServiceTypeEnum {
    Interactive = "Interactive"
,    LocalRadio = "Local Radio"
,    MasterBrandOnly = "Master Brand Only"
,    NationalRadio = "National Radio"
,    OnDemand = "On Demand"
,    RegionalRadio = "Regional Radio"
,    Simulcast = "Simulcast"
,    Tv = "TV"
,    WebOnly = "Web Only"
,    Webcast = "Webcast"
}


export class ListServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_from" })
  endFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_to" })
  endTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mid" })
  mid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service_type" })
  serviceType?: ListServicesServiceTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sid" })
  sid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_from" })
  startFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_to" })
  startTo?: Date;
}


export class ListServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListServicesQueryParams;
}


export class ListServicesResponse extends SpeakeasyBase {
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
