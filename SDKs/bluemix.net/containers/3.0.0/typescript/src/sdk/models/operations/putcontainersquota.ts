import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutContainersQuotaHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PutContainersQuotaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutContainersQuotaHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PutContainersQuotaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
