import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureSmtpDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class ConfigureSmtpDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureSmtpDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureSmtpDomainPathParams;

  @Metadata()
  queryParams: ConfigureSmtpDomainQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateSmtpDomainRequest;
}


export class ConfigureSmtpDomainResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
