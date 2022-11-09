import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class DeleteAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress: string;
}


export class DeleteAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAliasPathParams;

  @Metadata()
  queryParams: DeleteAliasQueryParams;
}


export class DeleteAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
