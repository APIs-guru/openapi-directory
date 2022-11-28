import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureAntiSpamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ConfigureAntiSpamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ConfigureAntiSpamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureAntiSpamPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfigureAntiSpamQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateAntiSpamRequest;
}


export class ConfigureAntiSpamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
