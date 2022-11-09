import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReisezentrenIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetReisezentrenIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReisezentrenIdPathParams;
}


export class GetReisezentrenIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
