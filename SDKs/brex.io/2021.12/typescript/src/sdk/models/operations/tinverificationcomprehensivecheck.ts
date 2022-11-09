import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TinVerificationComprehensiveCheckQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=threshold" })
  threshold?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tin" })
  tin: string;
}


export class TinVerificationComprehensiveCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class TinVerificationComprehensiveCheckRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TinVerificationComprehensiveCheckQueryParams;

  @Metadata()
  security: TinVerificationComprehensiveCheckSecurity;
}


export class TinVerificationComprehensiveCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tinVerificationComprehensiveCheck200ApplicationJsonAny?: any;

  @Metadata()
  tinVerificationComprehensiveCheckDefaultApplicationJsonAny?: any;
}
