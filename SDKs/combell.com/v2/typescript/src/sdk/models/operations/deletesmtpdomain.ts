import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSmtpDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class DeleteSmtpDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class DeleteSmtpDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSmtpDomainPathParams;

  @Metadata()
  queryParams: DeleteSmtpDomainQueryParams;
}


export class DeleteSmtpDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
