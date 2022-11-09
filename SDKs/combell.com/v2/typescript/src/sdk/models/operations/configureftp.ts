import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureFtpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ConfigureFtpQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureFtpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureFtpPathParams;

  @Metadata()
  queryParams: ConfigureFtpQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FtpConfiguration;
}


export class ConfigureFtpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
