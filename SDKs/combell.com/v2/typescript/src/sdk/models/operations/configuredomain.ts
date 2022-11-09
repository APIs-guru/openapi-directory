import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ConfigureDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureDomainPathParams;

  @Metadata()
  queryParams: ConfigureDomainQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.EditDomainWillRenewRequest;
}


export class ConfigureDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
