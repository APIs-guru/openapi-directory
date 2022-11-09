import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersUsageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersUsageRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetContainersUsageHeaders;
}


export class GetContainersUsageResponse extends SpeakeasyBase {
  @Metadata()
  containersUsageInfo?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
