import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinuxHostingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetLinuxHostingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;
}


export class GetLinuxHostingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinuxHostingPathParams;

  @Metadata()
  queryParams: GetLinuxHostingQueryParams;
}


export class GetLinuxHostingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linuxHostingDetail?: shared.LinuxHostingDetail;

  @Metadata()
  statusCode: number;
}
