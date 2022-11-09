import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListPeopleHasExternalIdEnum {
    True = "true"
,    False = "false"
}


export class ListPeopleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authority" })
  authority?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_external_id" })
  hasExternalId?: ListPeopleHasExternalIdEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=id_type" })
  idType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=programme" })
  programme?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class ListPeopleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPeopleQueryParams;
}


export class ListPeopleResponse extends SpeakeasyBase {
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
