import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClickwrapsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetClickwrapsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClickwrapsIdPathParams;
}


export class GetClickwrapsIdResponse extends SpeakeasyBase {
  @Metadata()
  clickwrapEntity?: shared.ClickwrapEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
