import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EinVerificationBasicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ein" })
  ein: string;
}


export class EinVerificationBasicSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class EinVerificationBasicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EinVerificationBasicQueryParams;

  @SpeakeasyMetadata()
  security: EinVerificationBasicSecurity;
}


export class EinVerificationBasicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  einVerificationBasic200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  einVerificationBasicDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
