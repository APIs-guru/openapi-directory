import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class ConfigureAliasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email_address" })
  emailAddress: string;
}


export class ConfigureAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureAliasPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureAliasQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateAliasRequest;
}


export class ConfigureAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestResponse?: shared.BadRequestResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
