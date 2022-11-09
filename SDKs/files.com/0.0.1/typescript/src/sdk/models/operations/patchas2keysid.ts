import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAs2KeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchAs2KeysIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=as2_partnership_name" })
  as2PartnershipName: string;
}


export class PatchAs2KeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAs2KeysIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchAs2KeysIdRequestBody;
}


export class PatchAs2KeysIdResponse extends SpeakeasyBase {
  @Metadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
