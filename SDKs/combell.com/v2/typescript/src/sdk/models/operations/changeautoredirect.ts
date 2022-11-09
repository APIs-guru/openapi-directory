import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeAutoRedirectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class ChangeAutoRedirectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangeAutoRedirectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeAutoRedirectPathParams;

  @Metadata()
  queryParams: ChangeAutoRedirectQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AutoRedirectConfig;
}


export class ChangeAutoRedirectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
