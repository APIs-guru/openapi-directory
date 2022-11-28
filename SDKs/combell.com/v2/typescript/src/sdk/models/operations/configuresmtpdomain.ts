import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureSmtpDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class ConfigureSmtpDomainQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureSmtpDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureSmtpDomainPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureSmtpDomainQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateSmtpDomainRequest;
}


export class ConfigureSmtpDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
