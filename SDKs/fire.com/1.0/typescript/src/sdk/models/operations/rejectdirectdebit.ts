import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RejectDirectDebitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directDebitUuid" })
  directDebitUuid: string;
}


export class RejectDirectDebitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RejectDirectDebitPathParams;
}


export class RejectDirectDebitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
