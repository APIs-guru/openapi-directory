import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssueRefundPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class IssueRefundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class IssueRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssueRefundPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.IssueRefundRequest;

  @SpeakeasyMetadata()
  security: IssueRefundSecurity;
}


export class IssueRefundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  refund?: shared.Refund;

  @SpeakeasyMetadata()
  statusCode: number;
}
