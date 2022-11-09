import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPublicKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPublicKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPublicKeysIdPathParams;
}


export class GetPublicKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @Metadata()
  statusCode: number;
}
