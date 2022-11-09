import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportExportedDataRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class ImportExportedData200ApplicationJsonCollections extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class ImportExportedData200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: operations.ImportExportedData200ApplicationJsonCollections })
  collections?: ImportExportedData200ApplicationJsonCollections[];
}


export class ImportExportedData400ApplicationJsonErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=param" })
  param?: string;
}


export class ImportExportedData400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: ImportExportedData400ApplicationJsonErrorDetails;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class ImportExportedData400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImportExportedData400ApplicationJsonError;
}


export class ImportExportedDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  importExportedData200ApplicationJsonObject?: ImportExportedData200ApplicationJson;

  @Metadata()
  importExportedData400ApplicationJsonObject?: ImportExportedData400ApplicationJson;
}
