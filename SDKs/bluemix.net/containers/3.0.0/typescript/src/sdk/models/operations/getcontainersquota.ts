import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersQuotaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersQuotaRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetContainersQuotaHeaders;
}


export class GetContainersQuotaResponse extends SpeakeasyBase {
  @Metadata()
  containersQuotaInfo?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
