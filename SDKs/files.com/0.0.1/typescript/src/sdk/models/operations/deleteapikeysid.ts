import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteApiKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiKeysIdPathParams;
}


export class DeleteApiKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
