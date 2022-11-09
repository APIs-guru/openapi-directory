import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWindowsHostingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetWindowsHostingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetWindowsHostingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWindowsHostingPathParams;

  @Metadata()
  queryParams: GetWindowsHostingQueryParams;
}


export class GetWindowsHostingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  windowsHostingDetail?: shared.WindowsHostingDetail;
}
