import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSearchV1FieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetSearchV1FieldsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchV1FieldsQueryParams;
}


export class GetSearchV1FieldsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  fields?: string[];

  @Metadata()
  statusCode: number;
}
