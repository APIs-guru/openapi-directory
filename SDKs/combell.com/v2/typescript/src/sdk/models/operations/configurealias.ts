import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class ConfigureAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress: string;
}


export class ConfigureAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureAliasPathParams;

  @Metadata()
  queryParams: ConfigureAliasQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateAliasRequest;
}


export class ConfigureAliasResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
