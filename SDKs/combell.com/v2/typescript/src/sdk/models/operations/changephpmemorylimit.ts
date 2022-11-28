import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangePhpMemoryLimitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class ChangePhpMemoryLimitQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class ChangePhpMemoryLimitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangePhpMemoryLimitPathParams;

  @SpeakeasyMetadata()
  queryParams: ChangePhpMemoryLimitQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdatePhpMemoryLimitRequest;
}


export class ChangePhpMemoryLimitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
