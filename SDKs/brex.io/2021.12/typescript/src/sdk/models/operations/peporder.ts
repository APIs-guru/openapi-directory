import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PepOrderTypeEnum {
    Unknown = "",
    B = "B",
    P = "P"
}


export class PepOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=search" })
  search: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: PepOrderTypeEnum;
}


export class PepOrderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Aliases;" })
  aliases?: string;

  @SpeakeasyMetadata({ data: "form, name=Country;" })
  country?: string;

  @SpeakeasyMetadata({ data: "form, name=DOB;" })
  dob?: string;

  @SpeakeasyMetadata({ data: "form, name=FamilyName;" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Filters;" })
  filters?: string;

  @SpeakeasyMetadata({ data: "form, name=GivenName;" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "form, name=LEI;" })
  lei?: string;

  @SpeakeasyMetadata({ data: "form, name=Locale;" })
  locale?: string;

  @SpeakeasyMetadata({ data: "form, name=Medialists;" })
  medialists?: string;

  @SpeakeasyMetadata({ data: "form, name=MiddleName;" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "form, name=Monitoring;" })
  monitoring?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Peplists;" })
  peplists?: string;

  @SpeakeasyMetadata({ data: "form, name=Region;" })
  region?: string;

  @SpeakeasyMetadata({ data: "form, name=SmartMatch;" })
  smartMatch?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Watchlists;" })
  watchlists?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhook;" })
  webhook?: string;
}


export class PepOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PepOrderPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PepOrderRequestBody;

  @SpeakeasyMetadata()
  security: PepOrderSecurity;
}


export class PepOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pepOrder200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  pepOrderDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
