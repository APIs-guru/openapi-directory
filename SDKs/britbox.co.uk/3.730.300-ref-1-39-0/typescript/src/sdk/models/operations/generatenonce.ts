import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenerateNonceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GenerateNonceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GenerateNonceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GenerateNonceQueryParams;

  @Metadata()
  security: GenerateNonceSecurity;
}


export class GenerateNonceResponse extends SpeakeasyBase {
  @Metadata()
  accountNonce?: shared.AccountNonce;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
