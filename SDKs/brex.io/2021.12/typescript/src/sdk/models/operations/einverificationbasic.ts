import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EinVerificationBasicQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ein" })
  ein: string;
}


export class EinVerificationBasicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class EinVerificationBasicRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EinVerificationBasicQueryParams;

  @Metadata()
  security: EinVerificationBasicSecurity;
}


export class EinVerificationBasicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  einVerificationBasic200ApplicationJsonAny?: any;

  @Metadata()
  einVerificationBasicDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
