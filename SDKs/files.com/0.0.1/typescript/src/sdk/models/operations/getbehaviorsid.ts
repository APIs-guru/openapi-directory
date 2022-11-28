import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBehaviorsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetBehaviorsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBehaviorsIdPathParams;
}


export class GetBehaviorsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  behaviorEntity?: shared.BehaviorEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
