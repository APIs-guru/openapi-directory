import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssueRefundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class IssueRefundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class IssueRefundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssueRefundPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.IssueRefundRequest;

  @Metadata()
  security: IssueRefundSecurity;
}


export class IssueRefundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  refund?: shared.Refund;

  @Metadata()
  statusCode: number;
}
