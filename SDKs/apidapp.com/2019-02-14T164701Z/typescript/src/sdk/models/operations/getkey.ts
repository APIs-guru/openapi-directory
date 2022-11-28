import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class GetKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetKeyQueryParams;
}


export class GetKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
