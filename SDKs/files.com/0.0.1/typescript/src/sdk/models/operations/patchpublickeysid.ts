import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchPublicKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchPublicKeysIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=title" })
  title: string;
}


export class PatchPublicKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchPublicKeysIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchPublicKeysIdRequestBody;
}


export class PatchPublicKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @Metadata()
  statusCode: number;
}
