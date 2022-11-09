import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeGzipCompressionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ChangeGzipCompressionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangeGzipCompressionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeGzipCompressionPathParams;

  @Metadata()
  queryParams: ChangeGzipCompressionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GzipConfig;
}


export class ChangeGzipCompressionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
