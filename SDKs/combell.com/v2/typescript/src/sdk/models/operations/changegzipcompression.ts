import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeGzipCompressionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ChangeGzipCompressionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangeGzipCompressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeGzipCompressionPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeGzipCompressionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GzipConfig;
}


export class ChangeGzipCompressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
