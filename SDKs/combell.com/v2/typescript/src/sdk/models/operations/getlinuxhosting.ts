import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinuxHostingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetLinuxHostingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetLinuxHostingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLinuxHostingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLinuxHostingQueryParams;
}


export class GetLinuxHostingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linuxHostingDetail?: shared.LinuxHostingDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
