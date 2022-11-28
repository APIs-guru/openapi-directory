import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminBackupsFilenamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class GetAdminBackupsFilenameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetAdminBackupsFilenameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdminBackupsFilenamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAdminBackupsFilenameQueryParams;
}


export class GetAdminBackupsFilenameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
