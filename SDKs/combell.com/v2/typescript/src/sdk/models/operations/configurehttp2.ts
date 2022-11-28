import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureHttp2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteName" })
  siteName: string;
}


export class ConfigureHttp2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_name" })
  siteName: string;
}


export class ConfigureHttp2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureHttp2PathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureHttp2QueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Http2Configuration;
}


export class ConfigureHttp2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
