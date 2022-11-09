import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminBackupsFilenamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class GetAdminBackupsFilenameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetAdminBackupsFilenameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdminBackupsFilenamePathParams;

  @Metadata()
  queryParams: GetAdminBackupsFilenameQueryParams;
}


export class GetAdminBackupsFilenameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
