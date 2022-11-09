import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAs2KeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAs2KeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAs2KeysIdPathParams;
}


export class GetAs2KeysIdResponse extends SpeakeasyBase {
  @Metadata()
  as2KeyEntity?: shared.As2KeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
