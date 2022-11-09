import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteKeyKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class DeleteKeyKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteKeyKeyPathParams;
}


export class DeleteKeyKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
