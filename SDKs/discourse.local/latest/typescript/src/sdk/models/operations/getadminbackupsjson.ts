import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminBackupsJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}


export class GetAdminBackupsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: GetAdminBackupsJson200ApplicationJson })
  getAdminBackupsJson200ApplicationJsonObjects?: GetAdminBackupsJson200ApplicationJson[];

  @SpeakeasyMetadata()
  statusCode: number;
}
