import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAvailablePhpVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetAvailablePhpVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetAvailablePhpVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAvailablePhpVersionsPathParams;

  @Metadata()
  queryParams: GetAvailablePhpVersionsQueryParams;
}


export class GetAvailablePhpVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PhpVersion })
  phpVersions?: shared.PhpVersion[];

  @Metadata()
  statusCode: number;
}
