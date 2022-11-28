import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TinVerificationBasicCheckQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tin" })
  tin: string;
}


export class TinVerificationBasicCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class TinVerificationBasicCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TinVerificationBasicCheckQueryParams;

  @SpeakeasyMetadata()
  security: TinVerificationBasicCheckSecurity;
}


export class TinVerificationBasicCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tinVerificationBasicCheck200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  tinVerificationBasicCheckDefaultApplicationJsonAny?: any;
}
