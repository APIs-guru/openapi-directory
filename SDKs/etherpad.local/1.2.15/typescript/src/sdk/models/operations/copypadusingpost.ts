import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CopyPadUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CopyPadUsingPostQueryParams;
}


export class CopyPadUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  copyPadUsingPost200ApplicationJsonObject?: CopyPadUsingPost200ApplicationJson;

  @Metadata()
  copyPadUsingPost400ApplicationJsonObject?: CopyPadUsingPost400ApplicationJson;

  @Metadata()
  copyPadUsingPost401ApplicationJsonObject?: CopyPadUsingPost401ApplicationJson;

  @Metadata()
  copyPadUsingPost500ApplicationJsonObject?: CopyPadUsingPost500ApplicationJson;
}
