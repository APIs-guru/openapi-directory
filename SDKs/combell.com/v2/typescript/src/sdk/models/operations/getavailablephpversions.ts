import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvailablePhpVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetAvailablePhpVersionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetAvailablePhpVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAvailablePhpVersionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAvailablePhpVersionsQueryParams;
}


export class GetAvailablePhpVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PhpVersion })
  phpVersions?: shared.PhpVersion[];

  @SpeakeasyMetadata()
  statusCode: number;
}
