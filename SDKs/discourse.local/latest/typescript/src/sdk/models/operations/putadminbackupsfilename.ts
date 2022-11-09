import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAdminBackupsFilenamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class PutAdminBackupsFilenameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAdminBackupsFilenamePathParams;
}


export class PutAdminBackupsFilenameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
