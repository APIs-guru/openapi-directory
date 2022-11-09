import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSshKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;
}


export class DeleteSshKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class DeleteSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSshKeyPathParams;

  @Metadata()
  queryParams: DeleteSshKeyQueryParams;
}


export class DeleteSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
