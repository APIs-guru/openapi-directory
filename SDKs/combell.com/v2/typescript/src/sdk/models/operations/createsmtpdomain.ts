import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSmtpDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class CreateSmtpDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class CreateSmtpDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSmtpDomainPathParams;

  @Metadata()
  queryParams: CreateSmtpDomainQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CreateSmtpDomainRequest;
}


export class CreateSmtpDomainResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
