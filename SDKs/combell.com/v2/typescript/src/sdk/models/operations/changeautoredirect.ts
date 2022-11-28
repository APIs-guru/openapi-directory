import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeAutoRedirectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class ChangeAutoRedirectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangeAutoRedirectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeAutoRedirectPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeAutoRedirectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AutoRedirectConfig;
}


export class ChangeAutoRedirectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
