import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAutomationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAutomationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomationsIdPathParams;
}


export class GetAutomationsIdResponse extends SpeakeasyBase {
  @Metadata()
  automationEntity?: shared.AutomationEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
