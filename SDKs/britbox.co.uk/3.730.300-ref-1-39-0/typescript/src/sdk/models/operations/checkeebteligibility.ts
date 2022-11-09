import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckEeBtEligibilityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CheckEeBtEligibilitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class CheckEeBtEligibilityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CheckEeBtEligibilityQueryParams;

  @Metadata()
  security: CheckEeBtEligibilitySecurity;
}


export class CheckEeBtEligibilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eeBtEligibility?: shared.EeBtEligibility;

  @Metadata()
  statusCode: number;
}
