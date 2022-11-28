import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSshKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;
}


export class DeleteSshKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class DeleteSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSshKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteSshKeyQueryParams;
}


export class DeleteSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
