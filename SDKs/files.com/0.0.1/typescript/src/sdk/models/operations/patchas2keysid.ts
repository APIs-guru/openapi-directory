import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchAs2KeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchAs2KeysIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=as2_partnership_name" })
  as2PartnershipName: string;
}


export class PatchAs2KeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAs2KeysIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchAs2KeysIdRequestBody;
}


export class PatchAs2KeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
