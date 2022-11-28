import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetListOfIssuedDocumentsId200ApplicationJson extends SpeakeasyBase {
    items: any[];
    resource: string;
}
export declare class GetListOfIssuedDocumentsId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfIssuedDocumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    getListOfIssuedDocumentsId200ApplicationJsonObject?: GetListOfIssuedDocumentsId200ApplicationJson;
    getListOfIssuedDocumentsId401ApplicationJsonObject?: GetListOfIssuedDocumentsId401ApplicationJson;
    getListOfIssuedDocumentsId500ApplicationJsonOneOf?: any;
    statusCode: number;
}
