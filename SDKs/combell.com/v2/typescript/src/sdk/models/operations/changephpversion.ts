import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangePhpVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ChangePhpVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangePhpVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangePhpVersionPathParams;

  @Metadata()
  queryParams: ChangePhpVersionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.PhpVersion;
}


export class ChangePhpVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
