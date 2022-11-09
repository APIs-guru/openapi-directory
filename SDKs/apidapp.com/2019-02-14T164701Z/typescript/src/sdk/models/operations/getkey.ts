import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class GetKeyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetKeyQueryParams;
}


export class GetKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
