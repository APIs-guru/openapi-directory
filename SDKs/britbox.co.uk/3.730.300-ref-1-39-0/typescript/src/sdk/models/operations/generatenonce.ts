import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateNonceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GenerateNonceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GenerateNonceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GenerateNonceQueryParams;

  @SpeakeasyMetadata()
  security: GenerateNonceSecurity;
}


export class GenerateNonceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountNonce?: shared.AccountNonce;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
