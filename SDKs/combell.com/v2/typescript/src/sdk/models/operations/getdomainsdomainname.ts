import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainsDomainNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetDomainsDomainNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetDomainsDomainNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainsDomainNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDomainsDomainNameQueryParams;
}


export class GetDomainsDomainNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainDetail?: shared.DomainDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
