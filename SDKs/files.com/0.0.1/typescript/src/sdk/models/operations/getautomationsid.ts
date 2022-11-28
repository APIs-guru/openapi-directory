import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutomationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAutomationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomationsIdPathParams;
}


export class GetAutomationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automationEntity?: shared.AutomationEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
