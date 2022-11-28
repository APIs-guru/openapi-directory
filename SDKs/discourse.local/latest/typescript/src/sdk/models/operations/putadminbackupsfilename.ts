import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAdminBackupsFilenamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class PutAdminBackupsFilenameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAdminBackupsFilenamePathParams;
}


export class PutAdminBackupsFilenameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
