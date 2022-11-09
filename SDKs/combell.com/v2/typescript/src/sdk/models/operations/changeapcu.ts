import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeApcuPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ChangeApcuQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangeApcuRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeApcuPathParams;

  @Metadata()
  queryParams: ChangeApcuQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdatePhpAPcuRequest;
}


export class ChangeApcuResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
