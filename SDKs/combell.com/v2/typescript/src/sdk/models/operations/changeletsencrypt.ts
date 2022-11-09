import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeLetsEncryptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=hostname" })
  hostname: string;
}


export class ChangeLetsEncryptQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangeLetsEncryptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeLetsEncryptPathParams;

  @Metadata()
  queryParams: ChangeLetsEncryptQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.LetsEncryptConfig;
}


export class ChangeLetsEncryptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
