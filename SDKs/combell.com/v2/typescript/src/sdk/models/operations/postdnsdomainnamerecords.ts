import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDnsDomainNameRecordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class PostDnsDomainNameRecordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class PostDnsDomainNameRecordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostDnsDomainNameRecordsPathParams;

  @Metadata()
  queryParams: PostDnsDomainNameRecordsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DnsRecord;
}


export class PostDnsDomainNameRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
