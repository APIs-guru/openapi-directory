import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateHostHeaderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteName" })
  siteName: string;
}


export class CreateHostHeaderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_name" })
  siteName: string;
}


export class CreateHostHeaderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateHostHeaderPathParams;

  @Metadata()
  queryParams: CreateHostHeaderQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AddHostHeaderRequest;
}


export class CreateHostHeaderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
