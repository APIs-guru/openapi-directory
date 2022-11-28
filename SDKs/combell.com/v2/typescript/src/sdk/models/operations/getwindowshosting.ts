import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWindowsHostingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetWindowsHostingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetWindowsHostingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWindowsHostingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWindowsHostingQueryParams;
}


export class GetWindowsHostingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  windowsHostingDetail?: shared.WindowsHostingDetail;
}
