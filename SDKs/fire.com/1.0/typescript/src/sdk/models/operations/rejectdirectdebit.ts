import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectDirectDebitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=directDebitUuid" })
  directDebitUuid: string;
}


export class RejectDirectDebitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RejectDirectDebitPathParams;
}


export class RejectDirectDebitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
