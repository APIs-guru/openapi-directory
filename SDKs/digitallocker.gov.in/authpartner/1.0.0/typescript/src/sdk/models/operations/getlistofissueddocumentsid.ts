import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListOfIssuedDocumentsId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=items" })
  items: any[];

  @Metadata({ data: "json, name=resource" })
  resource: string;
}


export class GetListOfIssuedDocumentsId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuedDocumentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListOfIssuedDocumentsId200ApplicationJsonObject?: GetListOfIssuedDocumentsId200ApplicationJson;

  @Metadata()
  getListOfIssuedDocumentsId401ApplicationJsonObject?: GetListOfIssuedDocumentsId401ApplicationJson;

  @Metadata()
  getListOfIssuedDocumentsId500ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
