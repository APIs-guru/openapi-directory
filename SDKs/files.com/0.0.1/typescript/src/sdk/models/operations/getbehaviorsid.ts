import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBehaviorsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetBehaviorsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBehaviorsIdPathParams;
}


export class GetBehaviorsIdResponse extends SpeakeasyBase {
  @Metadata()
  behaviorEntity?: shared.BehaviorEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
