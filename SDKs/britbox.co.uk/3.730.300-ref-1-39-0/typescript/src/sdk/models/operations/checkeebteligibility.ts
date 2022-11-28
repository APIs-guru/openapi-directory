import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckEeBtEligibilityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CheckEeBtEligibilitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class CheckEeBtEligibilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CheckEeBtEligibilityQueryParams;

  @SpeakeasyMetadata()
  security: CheckEeBtEligibilitySecurity;
}


export class CheckEeBtEligibilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eeBtEligibility?: shared.EeBtEligibility;

  @SpeakeasyMetadata()
  statusCode: number;
}
