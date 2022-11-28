import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBehaviorsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetBehaviorsIdRequest extends SpeakeasyBase {
    pathParams: GetBehaviorsIdPathParams;
}
export declare class GetBehaviorsIdResponse extends SpeakeasyBase {
    behaviorEntity?: shared.BehaviorEntity;
    contentType: string;
    statusCode: number;
}
