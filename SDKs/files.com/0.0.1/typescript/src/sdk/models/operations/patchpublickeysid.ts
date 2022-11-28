import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchPublicKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchPublicKeysIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title: string;
}


export class PatchPublicKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchPublicKeysIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchPublicKeysIdRequestBody;
}


export class PatchPublicKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
