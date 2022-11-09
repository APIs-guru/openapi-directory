import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePublicKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePublicKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePublicKeysIdPathParams;
}


export class DeletePublicKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
