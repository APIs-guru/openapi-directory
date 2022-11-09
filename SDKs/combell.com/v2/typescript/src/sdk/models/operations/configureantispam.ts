import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureAntiSpamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ConfigureAntiSpamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureAntiSpamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureAntiSpamPathParams;

  @Metadata()
  queryParams: ConfigureAntiSpamQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateAntiSpamRequest;
}


export class ConfigureAntiSpamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
