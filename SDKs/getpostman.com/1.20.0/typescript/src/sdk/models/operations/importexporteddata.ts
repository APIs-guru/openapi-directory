import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportExportedData200ApplicationJsonCollections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class ImportExportedData200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: ImportExportedData200ApplicationJsonCollections })
  collections?: ImportExportedData200ApplicationJsonCollections[];
}


export class ImportExportedData400ApplicationJsonErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=param" })
  param?: string;
}


export class ImportExportedData400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: ImportExportedData400ApplicationJsonErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ImportExportedData400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImportExportedData400ApplicationJsonError;
}


export class ImportExportedDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class ImportExportedDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  importExportedData200ApplicationJsonObject?: ImportExportedData200ApplicationJson;

  @SpeakeasyMetadata()
  importExportedData400ApplicationJsonObject?: ImportExportedData400ApplicationJson;
}
