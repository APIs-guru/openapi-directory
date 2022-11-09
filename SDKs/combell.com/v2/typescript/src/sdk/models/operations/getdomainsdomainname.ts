import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainsDomainNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetDomainsDomainNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetDomainsDomainNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainsDomainNamePathParams;

  @Metadata()
  queryParams: GetDomainsDomainNameQueryParams;
}


export class GetDomainsDomainNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainDetail?: shared.DomainDetail;

  @Metadata()
  statusCode: number;
}
