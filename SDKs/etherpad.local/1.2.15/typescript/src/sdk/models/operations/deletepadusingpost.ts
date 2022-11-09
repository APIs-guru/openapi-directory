import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePadUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class DeletePadUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeletePadUsingPostQueryParams;
}


export class DeletePadUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deletePadUsingPost200ApplicationJsonObject?: DeletePadUsingPost200ApplicationJson;

  @Metadata()
  deletePadUsingPost400ApplicationJsonObject?: DeletePadUsingPost400ApplicationJson;

  @Metadata()
  deletePadUsingPost401ApplicationJsonObject?: DeletePadUsingPost401ApplicationJson;

  @Metadata()
  deletePadUsingPost500ApplicationJsonObject?: DeletePadUsingPost500ApplicationJson;
}
