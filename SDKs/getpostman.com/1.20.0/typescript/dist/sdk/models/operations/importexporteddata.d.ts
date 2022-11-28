import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImportExportedData200ApplicationJsonCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class ImportExportedData200ApplicationJson extends SpeakeasyBase {
    collections?: ImportExportedData200ApplicationJsonCollections[];
}
export declare class ImportExportedData400ApplicationJsonErrorDetails extends SpeakeasyBase {
    param?: string;
}
export declare class ImportExportedData400ApplicationJsonError extends SpeakeasyBase {
    details?: ImportExportedData400ApplicationJsonErrorDetails;
    message?: string;
    name?: string;
}
export declare class ImportExportedData400ApplicationJson extends SpeakeasyBase {
    error?: ImportExportedData400ApplicationJsonError;
}
export declare class ImportExportedDataRequest extends SpeakeasyBase {
    request?: Uint8Array;
}
export declare class ImportExportedDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    importExportedData200ApplicationJsonObject?: ImportExportedData200ApplicationJson;
    importExportedData400ApplicationJsonObject?: ImportExportedData400ApplicationJson;
}
