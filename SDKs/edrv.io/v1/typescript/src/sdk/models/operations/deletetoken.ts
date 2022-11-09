import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTokenPathParams;
}


export class DeleteTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
