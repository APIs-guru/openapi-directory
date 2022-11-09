import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelMandateByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class CancelMandateByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelMandateByUuidPathParams;
}


export class CancelMandateByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
