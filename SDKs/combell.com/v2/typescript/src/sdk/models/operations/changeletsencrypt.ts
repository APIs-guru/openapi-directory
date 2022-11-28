import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeLetsEncryptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class ChangeLetsEncryptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangeLetsEncryptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeLetsEncryptPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangeLetsEncryptQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.LetsEncryptConfig;
}


export class ChangeLetsEncryptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
