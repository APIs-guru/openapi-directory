import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteVolumesNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteVolumesNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteVolumesNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVolumesNamePathParams;

  @Metadata()
  headers: DeleteVolumesNameHeaders;
}


export class DeleteVolumesNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
