import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutContainersQuotaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PutContainersQuotaRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutContainersQuotaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PutContainersQuotaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
