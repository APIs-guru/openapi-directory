import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClickwrapsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetClickwrapsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClickwrapsIdPathParams;
}


export class GetClickwrapsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clickwrapEntity?: shared.ClickwrapEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
