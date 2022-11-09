import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStylesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetStylesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStylesPathPathParams;
}


export class GetStylesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  styleEntity?: shared.StyleEntity;
}
