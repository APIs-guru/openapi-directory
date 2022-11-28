import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListOfIssuedDocumentsId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items" })
  items: any[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;
}


export class GetListOfIssuedDocumentsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuedDocumentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListOfIssuedDocumentsId200ApplicationJsonObject?: GetListOfIssuedDocumentsId200ApplicationJson;

  @SpeakeasyMetadata()
  getListOfIssuedDocumentsId401ApplicationJsonObject?: GetListOfIssuedDocumentsId401ApplicationJson;

  @SpeakeasyMetadata()
  getListOfIssuedDocumentsId500ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
