import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivateMandatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class ActivateMandateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivateMandatePathParams;
}


export class ActivateMandateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
