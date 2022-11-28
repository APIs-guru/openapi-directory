import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateHostHeaderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteName" })
  siteName: string;
}


export class CreateHostHeaderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_name" })
  siteName: string;
}


export class CreateHostHeaderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateHostHeaderPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateHostHeaderQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AddHostHeaderRequest;
}


export class CreateHostHeaderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
