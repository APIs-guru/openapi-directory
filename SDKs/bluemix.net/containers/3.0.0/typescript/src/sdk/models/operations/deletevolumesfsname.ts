import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteVolumesFsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteVolumesFsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class DeleteVolumesFsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVolumesFsNamePathParams;

  @Metadata()
  headers: DeleteVolumesFsNameHeaders;
}


export class DeleteVolumesFsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
