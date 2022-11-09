import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TinVerificationBasicCheckQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tin" })
  tin: string;
}


export class TinVerificationBasicCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class TinVerificationBasicCheckRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TinVerificationBasicCheckQueryParams;

  @Metadata()
  security: TinVerificationBasicCheckSecurity;
}


export class TinVerificationBasicCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tinVerificationBasicCheck200ApplicationJsonAny?: any;

  @Metadata()
  tinVerificationBasicCheckDefaultApplicationJsonAny?: any;
}
