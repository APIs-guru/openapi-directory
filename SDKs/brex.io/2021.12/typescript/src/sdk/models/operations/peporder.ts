import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PepOrderTypeEnum {
    Unknown = ""
,    B = "B"
,    P = "P"
}


export class PepOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=search" })
  search: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: PepOrderTypeEnum;
}


export class PepOrderRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=Aliases;" })
  aliases?: string;

  @Metadata({ data: "form, name=Country;" })
  country?: string;

  @Metadata({ data: "form, name=DOB;" })
  dob?: string;

  @Metadata({ data: "form, name=FamilyName;" })
  familyName?: string;

  @Metadata({ data: "form, name=Filters;" })
  filters?: string;

  @Metadata({ data: "form, name=GivenName;" })
  givenName?: string;

  @Metadata({ data: "form, name=LEI;" })
  lei?: string;

  @Metadata({ data: "form, name=Locale;" })
  locale?: string;

  @Metadata({ data: "form, name=Medialists;" })
  medialists?: string;

  @Metadata({ data: "form, name=MiddleName;" })
  middleName?: string;

  @Metadata({ data: "form, name=Monitoring;" })
  monitoring?: boolean;

  @Metadata({ data: "form, name=Peplists;" })
  peplists?: string;

  @Metadata({ data: "form, name=Region;" })
  region?: string;

  @Metadata({ data: "form, name=SmartMatch;" })
  smartMatch?: boolean;

  @Metadata({ data: "form, name=Watchlists;" })
  watchlists?: string;

  @Metadata({ data: "form, name=Webhook;" })
  webhook?: string;
}


export class PepOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PepOrderPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PepOrderRequestBody;

  @Metadata()
  security: PepOrderSecurity;
}


export class PepOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pepOrder200ApplicationJsonAny?: any;

  @Metadata()
  pepOrderDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
