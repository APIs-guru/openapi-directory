import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssignMsisdnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class AssignMsisdnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class AssignMsisdnRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AssignMsisdnQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvAssignMsisdnRequest;

  @Metadata()
  security: AssignMsisdnSecurity;
}


export class AssignMsisdnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
