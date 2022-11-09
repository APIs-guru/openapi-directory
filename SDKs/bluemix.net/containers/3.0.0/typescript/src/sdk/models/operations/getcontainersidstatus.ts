import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersIdStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetContainersIdStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersIdStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContainersIdStatusPathParams;

  @Metadata()
  headers: GetContainersIdStatusHeaders;
}


export class GetContainersIdStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getContainerStatus?: any;
}
