import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureFtpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ConfigureFtpQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureFtpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureFtpPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureFtpQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FtpConfiguration;
}


export class ConfigureFtpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
