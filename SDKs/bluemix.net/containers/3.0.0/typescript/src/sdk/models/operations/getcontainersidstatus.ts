import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersIdStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetContainersIdStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersIdStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContainersIdStatusPathParams;

  @SpeakeasyMetadata()
  headers: GetContainersIdStatusHeaders;
}


export class GetContainersIdStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getContainerStatus?: any;
}
