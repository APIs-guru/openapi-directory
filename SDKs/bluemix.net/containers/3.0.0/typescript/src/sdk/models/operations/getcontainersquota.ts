import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersQuotaHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersQuotaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetContainersQuotaHeaders;
}


export class GetContainersQuotaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersQuotaInfo?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
