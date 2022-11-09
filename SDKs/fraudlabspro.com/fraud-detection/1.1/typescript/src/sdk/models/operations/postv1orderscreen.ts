import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostV1OrderScreenFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class PostV1OrderScreenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=avs_result" })
  avsResult?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bill_addr" })
  billAddr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bill_city" })
  billCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bill_country" })
  billCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bill_state" })
  billState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bill_zip_code" })
  billZipCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bin_no" })
  binNo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=card_hash" })
  cardHash?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cvv_result" })
  cvvResult?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=department" })
  department?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email_domain" })
  emailDomain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email_hash" })
  emailHash?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_name" })
  firstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=flp_checksum" })
  flpChecksum?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostV1OrderScreenFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_name" })
  lastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=password_hash" })
  passwordHash?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payment_mode" })
  paymentMode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quantity" })
  quantity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ship_addr" })
  shipAddr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ship_city" })
  shipCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ship_country" })
  shipCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ship_state" })
  shipState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ship_zip_code" })
  shipZipCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_order_id" })
  userOrderId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_order_memo" })
  userOrderMemo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_phone" })
  userPhone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username_hash" })
  usernameHash?: string;
}


export class PostV1OrderScreenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostV1OrderScreenQueryParams;
}


export class PostV1OrderScreenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postV1OrderScreen200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
