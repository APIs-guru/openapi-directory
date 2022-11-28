import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostV1OrderScreenFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class PostV1OrderScreenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=avs_result" })
  avsResult?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bill_addr" })
  billAddr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bill_city" })
  billCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bill_country" })
  billCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bill_state" })
  billState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bill_zip_code" })
  billZipCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bin_no" })
  binNo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=card_hash" })
  cardHash?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cvv_result" })
  cvvResult?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_domain" })
  emailDomain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_hash" })
  emailHash?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=flp_checksum" })
  flpChecksum?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostV1OrderScreenFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password_hash" })
  passwordHash?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_mode" })
  paymentMode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ship_addr" })
  shipAddr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ship_city" })
  shipCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ship_country" })
  shipCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ship_state" })
  shipState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ship_zip_code" })
  shipZipCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_order_id" })
  userOrderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_order_memo" })
  userOrderMemo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_phone" })
  userPhone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username_hash" })
  usernameHash?: string;
}


export class PostV1OrderScreenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostV1OrderScreenQueryParams;
}


export class PostV1OrderScreenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postV1OrderScreen200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
