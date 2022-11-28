import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDomainsDomainNameNameserversPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class PutDomainsDomainNameNameserversQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class PutDomainsDomainNameNameserversRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDomainsDomainNameNameserversPathParams;

  @SpeakeasyMetadata()
  queryParams: PutDomainsDomainNameNameserversQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.EditNameServers;
}


export class PutDomainsDomainNameNameserversResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
