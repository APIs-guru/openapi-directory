import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureSshPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ConfigureSshQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureSshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureSshPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureSshQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SshConfiguration;
}


export class ConfigureSshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
