import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSmtpDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class DeleteSmtpDomainQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class DeleteSmtpDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSmtpDomainPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteSmtpDomainQueryParams;
}


export class DeleteSmtpDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
