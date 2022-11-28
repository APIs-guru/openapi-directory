import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSearchV1FieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetSearchV1FieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchV1FieldsQueryParams;
}


export class GetSearchV1FieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fields?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
