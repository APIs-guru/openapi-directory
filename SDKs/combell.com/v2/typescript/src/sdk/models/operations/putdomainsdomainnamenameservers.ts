import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDomainsDomainNameNameserversPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class PutDomainsDomainNameNameserversQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class PutDomainsDomainNameNameserversRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDomainsDomainNameNameserversPathParams;

  @Metadata()
  queryParams: PutDomainsDomainNameNameserversQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.EditNameServers;
}


export class PutDomainsDomainNameNameserversResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
