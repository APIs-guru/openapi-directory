import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureSshPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ConfigureSshQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureSshRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureSshPathParams;

  @Metadata()
  queryParams: ConfigureSshQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SshConfiguration;
}


export class ConfigureSshResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
