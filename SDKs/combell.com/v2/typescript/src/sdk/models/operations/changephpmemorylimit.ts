import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangePhpMemoryLimitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ChangePhpMemoryLimitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangePhpMemoryLimitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangePhpMemoryLimitPathParams;

  @Metadata()
  queryParams: ChangePhpMemoryLimitQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdatePhpMemoryLimitRequest;
}


export class ChangePhpMemoryLimitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
