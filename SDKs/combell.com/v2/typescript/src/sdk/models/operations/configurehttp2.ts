import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureHttp2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteName" })
  siteName: string;
}


export class ConfigureHttp2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_name" })
  siteName: string;
}


export class ConfigureHttp2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureHttp2PathParams;

  @Metadata()
  queryParams: ConfigureHttp2QueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Http2Configuration;
}


export class ConfigureHttp2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
