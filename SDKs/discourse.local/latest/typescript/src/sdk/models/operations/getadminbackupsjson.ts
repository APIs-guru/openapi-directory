import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminBackupsJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=last_modified" })
  lastModified: string;

  @Metadata({ data: "json, name=size" })
  size: number;
}


export class GetAdminBackupsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetAdminBackupsJson200ApplicationJson })
  getAdminBackupsJson200ApplicationJsonObjects?: GetAdminBackupsJson200ApplicationJson[];

  @Metadata()
  statusCode: number;
}
