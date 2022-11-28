import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersUsageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetContainersUsageHeaders;
}


export class GetContainersUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersUsageInfo?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
