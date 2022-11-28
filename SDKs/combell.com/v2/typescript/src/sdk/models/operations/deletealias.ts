import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class DeleteAliasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress: string;
}


export class DeleteAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAliasPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteAliasQueryParams;
}


export class DeleteAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
